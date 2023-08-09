import { TestBed } from '@angular/core/testing';
import { ModelSelectorService } from './model-selector.service';
import { Models } from 'src/app/builder/model-selector/models';
import { AssertionError } from 'assert';

let service: ModelSelectorService;

beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [ModelSelectorService]
    });
    service = TestBed.inject(ModelSelectorService);
});

it('should calculate full model stats', () => {
    const model = Models.find(model => model.displayName === 'Hinterguard');
    if (!model) {
        throw AssertionError;
    }
    const calcdModelStats = service.calculateStats(model.stats, model.value)
    expect(calcdModelStats?.abilities.dexterity).toBe(8);
});