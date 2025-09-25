import * as tf from '@tensorflow/tfjs';
import { Model } from 'src/app/model';

export class CostPredictorService {
  private model: tf.Sequential;
  private normalizer: {[key: string]: {mean: number, std: number}};

  constructor() {
    this.model = tf.sequential();
    this.normalizer = {};
  }

  async trainModel(characters: Model[]) {
    // Prepare training data
    const features = characters.map(char => this.extractFeatures(char));
    const labels = characters.map(char => char.value);

    // Normalize features
    // console.log(`features: ${features}`);
    this.computeNormalization(features);
    const normalizedFeatures = this.normalizeFeatures(features);

    // Convert to tensors
    const xs = tf.tensor2d(normalizedFeatures);
    const ys = tf.tensor1d(labels);

    // Create model architecture
    this.model.add(tf.layers.dense({
      units: 32,
      activation: 'relu',
      inputShape: [normalizedFeatures[0].length]
    }));
    this.model.add(tf.layers.dense({units: 16, activation: 'relu'}));
    this.model.add(tf.layers.dense({units: 1}));

    // Compile and train
    this.model.compile({
      optimizer: tf.train.adam(),
      loss: 'meanSquaredError'
    });

    await this.model.fit(xs, ys, {
      epochs: 100,
      validationSplit: 0.2,
      callbacks: {
        onEpochEnd: (epoch: any, logs: any) => {
          console.log(`Epoch ${epoch}: loss = ${logs?.loss}`);
        }
      }
    });
  }

  predictCost(character: Partial<Model>): number {
    const features = this.extractFeatures(character);
    const normalizedFeatures = this.normalizeFeatures([features]);
    const prediction = this.model.predict(tf.tensor2d(normalizedFeatures)) as tf.Tensor;
    return Math.round(prediction.dataSync()[0]);
  }

  private extractFeatures(character: Partial<Model>): number[] {
    const features = [
      character.stats?.type === 'Hero' ? 1 : 0,
      character.type === 'Caster' ? 1 : 0,
      character.type === 'Leader' ? 1 : 0,
      character.stats?.talents?.length || 0, // TODO: Weight certain talents
      character.stats?.shield ? 1 : 0, // TODO: consider shield type weighting
      character.stats?.skills?.length || 0, // TODO: Weight based on rating
      character.stats?.armor || 0,
      character.stats?.discipline || 0,
      character.stats?.speed || 0,
      character.stats?.casting? 1 : 0,
      character.stats?.melee ? character.stats.melee?.reduce((acc, wpn) => {
          return acc + wpn.rating; //TODO: include damage in the weighting
      }, 0) : 0,
      character.stats?.range ? character.stats.range?.reduce((acc, wpn) => {
          return acc + wpn.rating; // TODO: include distance in the weighting (wpn.rating * (1 + (wpn.distance / 100)))
      }, 0) : 0
    ];

    // Add ability scores
    const abilities = character.stats?.abilities || {};
    features.push(
      abilities.strength || 0,
      abilities.agility || 0,
      abilities.dexterity || 0,
      abilities.endurance || 0,
      abilities.knowledge || 0,
      abilities.spirit || 0
    );

    return features;
  }

  private computeNormalization(features: number[][]) {
    for (let i = 0; i < features[0].length; i++) {
      const values = features.map(f => f[i]);
      const mean = values.reduce((a, b) => a + b) / values.length;
      const std = Math.sqrt(
        values.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / values.length
      );
      this.normalizer[i] = { mean, std };
    }
  }

  private normalizeFeatures(features: number[][]): number[][] {
    return features.map(feature =>
      feature.map((value, index) =>
        (value - this.normalizer[index].mean) / 
        (this.normalizer[index].std || 1)
      )
    );
  }
}