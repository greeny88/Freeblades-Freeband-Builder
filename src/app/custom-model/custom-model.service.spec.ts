import { TestBed } from '@angular/core/testing';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { CostPredictorService } from './custom-model.service';
import { Model, ModelStats } from 'src/app/model';
import { Models } from 'src/app/builder/model-selector/models';
import { ModelSelectorService } from '../builder/model-selector/model-selector.service';

describe('CostPredictorService', () => {
    let service: CostPredictorService;
    let modelSelector: ModelSelectorService;

    beforeAll(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000; // Set timeout to 60 seconds
    });

    afterAll(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000; // Reset to default
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                CostPredictorService, 
                ModelSelectorService,
                provideExperimentalZonelessChangeDetection()
            ]
        }).compileComponents();

        service = TestBed.inject(CostPredictorService);
        modelSelector = TestBed.inject(ModelSelectorService);
    });

    it('should extract basic hero features correctly', () => {
        const hero: Partial<Model> = {
            stats: {
                type: 'Hero',
                armor: 5,
                discipline: 8,
                speed: 5
            }
        };

        const features = (service as any).extractFeatures(hero);
        expect(features[0]).toBe(1); // isHero
        expect(features[5]).toBe(5); // armor
        expect(features[6]).toBe(8); // discipline
        expect(features[7]).toBe(5); // speed
    });

    it('should extract caster features correctly', () => {
        const caster: Partial<Model> = {
            type: 'Caster',
            stats: {
                type: 'Hero',
                casting: {
                    rating: 8,
                    power: 20,
                    name: '',
                    type: 'energy'
                },
                armor: 5,
                discipline: 8,
                speed: 5
            }
        };

        const features = (service as any).extractFeatures(caster);
        expect(features[1]).toBe(1); // isCaster
        expect(features[8]).toBe(1); // hasCasting
    });

    it('should extract weapon features correctly', () => {
        const model: Partial<Model> = {
            stats: {
                melee: [{
                    name: 'Broadsword',
                    rating: 8,
                    damage: 2
                }],
                range: [{
                    name: 'Bow',
                    rating: 6,
                    damage: 2,
                    distance: 12
                }],
                armor: 5,
                discipline: 8,
                speed: 5,
                type: 'Hero'
            }
        };

        const features = (service as any).extractFeatures(model);
        expect(features[11]).toBe(10); // melee total (rating + damage)
        expect(features[12]).toBe(14); // range total (rating + damage + distance)
    });

    it('should extract ability features correctly', () => {
        const model: Partial<Model> = {
            stats: {
                abilities: {
                    strength: 8,
                    agility: 7,
                    dexterity: 6,
                    endurance: 5,
                    knowledge: 4,
                    spirit: 3
                },
                armor: 5,
                discipline: 8,
                speed: 5,
                type: 'Hero'
            }
        };

        const features = (service as any).extractFeatures(model);
        expect(features[13]).toBe(8); // strength
        expect(features[14]).toBe(7); // agility
        expect(features[15]).toBe(6); // dexterity
        expect(features[16]).toBe(5); // endurance
        expect(features[17]).toBe(4); // knowledge
        expect(features[18]).toBe(3); // spirit
    });

    xit('should predict costs for random models accurately', async () => {
        // Get 10 random models
        const randomModels = shuffleArray(Models).slice(0, 10);
        const existingCharacters: Model[] = Models.map(m => {
            m.stats = (<any>Object).assign(m.stats, modelSelector.calculateStats(m.stats, m.value));
            return m;
        });
        await service.trainModel(existingCharacters);

        for (const model of randomModels) {
            const predictedCost = service.predictCost(model);
            console.log(`Testing model: ${model.name} with actual cost ${model.value} Predicted cost: ${predictedCost}`);
            expect(Math.abs(predictedCost - model.value)).toBeLessThan(3);
        }
    });
});

function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}