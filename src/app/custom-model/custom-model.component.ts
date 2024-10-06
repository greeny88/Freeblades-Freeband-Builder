import { Component } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import { Models } from 'src/app/builder/model-selector/models';
import { Model } from 'src/app/model';

@Component({
    selector: 'app-custom-model',
    templateUrl: './custom-model.component.html',
    styleUrls: ['./custom-model.component.scss']
})
export class CustomModelComponent {
    ngOnInit() {
        // this.run();
        this.createModel();
    }

    // TODO: get models from Models.
    // TODO: convert into data model where xs: [model.type, model.stats.abilities, discipline, type, talents, speed, melee[*].rating, range[*].rating, range[*].distance, shield, armor, skills, casting] and ys: model.value

    private transformData(model: Model) {
        const shieldMapping = [undefined, 'AN', 'AS', 'B', 'L', 'P', 'S'];
        const details = [
            model.type === 'Leader' ? 2 : model.type === 'Caster' ? 1 : 0,
            model.stats.discipline,
            model.stats.type === 'Hero' ? 1 : 0,
            model.stats.speed,
            model.stats.armor,
            shieldMapping.indexOf(model.stats.shield),
            model.stats.abilities?.agility ?? 0,
            model.stats.abilities?.dexterity ?? 0,
            model.stats.abilities?.endurance ?? 0,
            model.stats.abilities?.knowledge ?? 0,
            model.stats.abilities?.spirit ?? 0,
            model.stats.abilities?.strength ?? 0,
            // TODO: weigh different talents
            model.stats.talents?.length ?? 0,
            // TODO: weigh different skills
            model.stats.skills?.length ?? 0,
            model.stats.casting ? 1 : 0,
            // TODO: is weapon type/damage important to factor?
            model.stats.melee ? model.stats.melee?.reduce((acc, wpn) => {
                return acc + wpn.rating;
            }, 0) : 0,
            model.stats.range ? model.stats.range?.reduce((acc, wpn) => {
                return acc + wpn.rating;
            }, 0) : 0
        ];
        return {xs: details, ys: model.value};
    }

    createModel() {
        console.log('createModel');
        const dataset = tf.data.array(Models.map(this.transformData)).batch(10);
        const model = tf.sequential();
        model.add(tf.layers.dense({inputShape: [17], units: 1, activation: 'relu'}));
        model.add(tf.layers.dense({units: 100, activation: 'softmax'}));
        // model.add(tf.layers.dense({units: 1, activation: 'sigmoid'}));
        // model.add(tf.layers.dense({units: 250, activation: 'relu', inputShape: [8]}));
        // model.add(tf.layers.dense({units: 175, activation: 'relu'}));
        // model.add(tf.layers.dense({units: 150, activation: 'relu'}));
        // model.add(tf.layers.dense({units: NUM_PITCH_CLASSES, activation: 'softmax'}));
        model.compile({
            optimizer: tf.train.adam(),
            loss: 'sparseCategoricalCrossentropy',
            metrics: ['accuracy']
        });
        // console.log(Models.map(this.transformData));
        model.fitDataset(dataset, {epochs: 5}).then(info => {
            console.log(info);
            // console.log('Accuracy', info);
            // (model.predict(tf.tensor([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])) as tf.Tensor).data().then(cost => displayCost(cost));

            (model.predict(tf.tensor([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])) as tf.Tensor).print();
        });
    }

    run() {
        // Define a model for linear regression.
        const model = tf.sequential();
        model.add(tf.layers.dense({units: 1, inputShape: [1]}));

        // Prepare the model for training: Specify the loss and the optimizer.
        model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

        // Generate some synthetic data for training.
        const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
        const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

        // Train the model using the data.
        model.fit(xs, ys).then(() => {
            // Use the model to do inference on a data point the model hasn't seen before:
            // Open the browser devtools to see the output
            (model.predict(tf.tensor2d([5], [1, 1])) as tf.Tensor).print();
        });

        // console.log(this.transformData(Models[0]));
        // console.log(Models.slice(0,9).map(this.transformData));
    }
}
