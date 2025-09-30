import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CostPredictorService } from './custom-model.service';
import { Model } from 'src/app/model';
import { Models } from 'src/app/builder/model-selector/models';
import { ModelSelectorService } from 'src/app/builder/model-selector/model-selector.service';
import { MeleeWeapons, RangeWeapons, Skills, Talents } from '../builder/model-selector/advancements';
import { MatSelectChange } from '@angular/material/select';

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
        type: ['Hero'],
        armor: [2],
        discipline: [8],
        speed: [0],
        shield: [false],
        melee: this.fb.array([this.fb.group({ weapon: '', rating: [8] })]),
        range: this.fb.array([]),
        talents: this.fb.array([]),
        skills: [[]],
        abilities: this.fb.group({
          strength: [8],
          agility: [8],
          dexterity: [8],
          endurance: [8],
          knowledge: [8],
          spirit: [8]
        })
      })
    });
  }

  async ngOnInit() {
    const existingCharacters: Model[] = Models.map(m => {
      m.stats = (<any>Object).assign(m.stats, this.modelSelector.calculateStats(m.stats, m.value));
      return m;
    });
    console.log('Existing characters for training:', existingCharacters[3]);
    await this.costPredictor.trainModel(existingCharacters);
    this.trainingDone = true;
    // this.setAbilitiesForModelType('Hero');
  }

  onTypeChange(event: MatSelectChange): void {
    const type = event.value;
    if (type === 'Leader' || type === 'Caster') {
      this.characterForm.get('stats.type')?.setValue('Hero');
      this.characterForm.get('stats.type')?.disable();
      this.setAbilitiesForModelType('Hero');
    } else {
      this.characterForm.get('stats.type')?.enable();
    }
  }

  onModelTypeChange(event: MatSelectChange): void {
    const type = event.value;
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
    characterData.stats.melee = characterData.stats.melee.map((mw: any) => {
      return { name: mw.weapon.name, damage: mw.weapon.damage, rating: mw.rating };
    });
    characterData.stats.range = characterData.stats.range.map((rw: any) => {
      return { name: rw.weapon.name, damage: rw.weapon.damage, rating: rw.rating, distance: rw.weapon.distance };
    });
    console.log('Character Data:', characterData);
    this.predictedCost = this.costPredictor.predictCost(characterData);
  }

  get melee(): FormArray {
    return this.characterForm.get('stats.melee') as FormArray;
  }

  get range(): FormArray {
    return this.characterForm.get('stats.range') as FormArray;
  }

  get talent(): FormArray {
    return this.characterForm.get('stats.talents') as FormArray;
  }

  addWeapon(weaponType: 'melee' | 'range'): void {
    const control = this.characterForm.get(`stats.${weaponType}`) as FormArray;
    control.push(this.fb.group({ weapon: '', rating: [8] }));
  }

  removeWeapon(weaponType: 'melee' | 'range', index: number): void {
    const control = this.characterForm.get(`stats.${weaponType}`) as FormArray;
    control.removeAt(index);
  }

  addTalent(): void {
    const control = this.characterForm.get('stats.talents') as FormArray;
    control.push(this.fb.control(''));
  }

  removeTalent(index: number): void {
    const control = this.characterForm.get('stats.talents') as FormArray;
    control.removeAt(index);
  }
}
