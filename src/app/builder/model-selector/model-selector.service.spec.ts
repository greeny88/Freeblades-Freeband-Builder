import { TestBed } from '@angular/core/testing';
import { ModelSelectorService } from './model-selector.service';
import { Model } from 'src/app/model';

describe('ModelSelectedService', () => {
    let service: ModelSelectorService;
    let heroModel: Model;
    let followerModel: Model;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [ModelSelectorService]
        });
    });
    
    beforeEach(() => {
        service = TestBed.inject(ModelSelectorService);
        heroModel = {
            name: 'Test Hero',
            displayName: 'Test Hero',
            factions: ['Kuzaarik Forgers'],
            gender: 'M',
            race: 'Faeler',
            value: 30,
            type: 'Standard',
            stats: {
                type: 'Hero',
                armor: 5,
                discipline: 8,
                speed: 5
            }
        };
        followerModel = {
            name: 'Test Follower',
            displayName: 'Test Follower',
            factions: ['Kuzaarik Forgers'],
            gender: 'M',
            race: 'Faeler',
            value: 10,
            type: 'Standard',
            stats: {
                type: 'Follower',
                armor: 5,
                discipline: 6,
                speed: 5
            }
        };
    });
    
    it('should calculate model abilities for hero.', () => {
        const model: Model = heroModel;
        const calcdModelStats = service.calculateStats(model.stats, model.value);
    
        expect(calcdModelStats?.abilities.agility).toBe(8);
        expect(calcdModelStats?.abilities.dexterity).toBe(8);
        expect(calcdModelStats?.abilities.endurance).toBe(8);
        expect(calcdModelStats?.abilities.knowledge).toBe(8);
        expect(calcdModelStats?.abilities.spirit).toBe(8);
        expect(calcdModelStats?.abilities.strength).toBe(8);
    });
    
    it('should calculate model abilities for follower.', () => {
        const model: Model = followerModel;
        const calcdModelStats = service.calculateStats(model.stats, model.value);
    
        expect(calcdModelStats?.abilities.agility).toBe(6);
        expect(calcdModelStats?.abilities.dexterity).toBe(6);
        expect(calcdModelStats?.abilities.endurance).toBe(6);
        expect(calcdModelStats?.abilities.knowledge).toBe(6);
        expect(calcdModelStats?.abilities.spirit).toBe(6);
        expect(calcdModelStats?.abilities.strength).toBe(6);
    });

    it('should calculate adding advancements.', () => {
        const model: Model = heroModel;
        model.stats.advancements = [{
            name: 'Active Defense',
            cost: 3
        },{
            name: 'DISC',
            cost: 3
        },{
            name: 'RAR',
            cost: 3
        },{
            name: 'MAR',
            cost: 3
        },{
            name: 'SPD',
            cost: 3
        },{
            name: 'AGL',
            cost: 3
        },{
            name: 'Hunt',
            cost: 3
        },{
            name: 'Jump',
            cost: 3
        }];
        model.stats.range = [{
            name: 'Bow',
            rating: 8
        }];
        model.stats.melee = [{
            name: 'Warhammer',
            rating: 8
        }];
        const calcdModelStats = service.calculateStats(model.stats, model.value);
    
        if (!calcdModelStats) {
            fail('stats not defined.');
            return;
        }
        expect(calcdModelStats.talentList).toContain('Active Defense');
        expect(calcdModelStats.discipline).toBe(10);
        if (calcdModelStats.range && calcdModelStats.range[0]) {
            expect(calcdModelStats.range[0].rating).toBe(10);
        } else {
            fail('range not defined.');
        }
        if (calcdModelStats.melee && calcdModelStats.melee[0]) {
            expect(calcdModelStats.melee[0].rating).toBe(10);
        } else {
            fail('melee not defined.');
        }
        expect(calcdModelStats.abilities.agility).toBe(10);        
        expect(calcdModelStats.modelValue).toBe(54);
        expect(calcdModelStats.speed).toBe(6);
        expect(calcdModelStats.skillList).toContain('Hunt - d6');
        expect(calcdModelStats.skillList).toContain('Jump - d8');
    });

    xit('should calculate adding options.');

    xit('should calculate adding veteran options.');

    xit('should calculate adding items.');

    xit('should calculate adding injuries.');

    xit('should add MAR to non-calvary weapons only.');

    xit('should sum talents together with same name.');
});
