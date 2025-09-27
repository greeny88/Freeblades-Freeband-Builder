import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CostPredictorService } from './custom-model.service';
import { Model } from 'src/app/model';
import { Models } from 'src/app/builder/model-selector/models';
import { ModelSelectorService } from 'src/app/builder/model-selector/model-selector.service';
import { MeleeWeapons, RangeWeapons, Skills, Talents } from '../builder/model-selector/advancements';

@Component({
  selector: 'app-custom-model',
  templateUrl: './custom-model.component.html',
  styleUrls: ['./custom-model.component.scss']
})
export class CustomModelComponent implements OnInit {
  characterForm: FormGroup;
  predictedCost: number | null = null;
  meleeWeapons = MeleeWeapons;
  rangeWeapons = RangeWeapons;
  talents = Talents;
  skills = Skills;
  trainingDone = false;

  constructor(
    private fb: FormBuilder,
    private costPredictor: CostPredictorService,
    private modelSelector: ModelSelectorService
  ) {
    this.characterForm = this.fb.group({
      type: ['Standard'],
      stats: this.fb.group({
        type: ['Follower'],
        armor: [0],
        discipline: [0],
        speed: [0],
        shield: [false],
        melee: this.fb.array([this.fb.group({ name:'', damage: [0], rating: [6] })]),
        range: [[]],
        talents: [[]],
        skills: [[]],
        abilities: this.fb.group({
          strength: [6],
          agility: [6],
          dexterity: [6],
          endurance: [6],
          knowledge: [6],
          spirit: [6]
        })
      })
    });
  }

  async ngOnInit() {
    const existingCharacters: Model[] = Models.map(m => {
      m.stats = (<any>Object).assign(m.stats, this.modelSelector.calculateStats(m.stats, m.value));
      return m;
    });
    await this.costPredictor.trainModel(existingCharacters);
    this.trainingDone = true;
    this.setAbilitiesForModelType('Hero');
  }

  onTypeChange(event: Event): void {
    const type = (event.target as HTMLSelectElement).value;
    if (type === 'Leader' || type === 'Caster') {
      this.characterForm.get('stats.type')?.setValue('Hero');
      this.characterForm.get('stats.type')?.disable();
      this.setAbilitiesForModelType('Hero');
    } else {
      this.characterForm.get('stats.type')?.enable();
    }
  }

  onModelTypeChange(event: Event): void {
    const type = (event.target as HTMLSelectElement).value;
    this.setAbilitiesForModelType(type);
  }

  setAbilitiesForModelType(type: string): void {
    const baseValue = type === 'Hero' ? 8 : 6;
    const abilities = this.characterForm.get('stats.abilities');
    
    if (abilities) {
      Object.keys(abilities.value).forEach(ability => {
        abilities.get(ability)?.setValue(baseValue);
      });
    }
  }

  isModelTypeDisabled(): boolean {
    const type = this.characterForm.get('type')?.value;
    return type === 'Leader' || type === 'Caster';
  }

  predictCost(): void {
    const characterData = this.characterForm.value;
    console.log('Character Data:', characterData);
    this.predictedCost = this.costPredictor.predictCost(characterData);
  }

  removeMeleeWeapon(index: number): void {
    this.melee.removeAt(index);
  }

  get melee(): FormArray {
    return this.characterForm.get('stats.melee') as FormArray;
  }

  addMeleeWeapon(): void {
    this.melee.push(this.fb.control({ damage: 0, rating: 6 }));
  }
}
