import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CostPredictorService } from './custom-model.service';
import { Model } from 'src/app/model';
import { Models } from 'src/app/builder/model-selector/models';
import { ModelSelectorService } from 'src/app/builder/model-selector/model-selector.service';
import { MeleeWeapons, RangeWeapons, Skills, AdvancementTalents, OtherTalents } from '../builder/model-selector/advancements';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-custom-model',
  templateUrl: './custom-model.component.html',
  styleUrls: ['./custom-model.component.scss']
})
export class CustomModelComponent implements OnInit, OnDestroy {
  characterForm: FormGroup;
  predictedCost: number | null = null;
  meleeWeapons = MeleeWeapons;
  rangeWeapons = RangeWeapons;
  talents = [...AdvancementTalents, ...OtherTalents].sort();
  skills = Skills;
  trainingDone = false;
  currentLoadingText: string = '';
  private loadingTexts: string[] = [
    "Spike and win!",
    "Sharpening the blades...",
    "Restringing the bows...",
    "Polishing the armor...",
    "Counting the gold coins...",
    "Feeding the warbeasts...",
    "Readying the freeband...",
    "Preparing the ritual...",
    "Securing the camp...",
    "Tuning the instruments...",
    "Studying the maps...",
    "Scouting the battlefield...",
    "The Gaal must be crazy...",
    "Tarch!"
  ];
  private textInterval: any;
  private currentIndex: number = 0;

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
        speed: [5],
        shield: [false],
        casting: [false],
        performance: [false],
        focus: [false],
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
    this.rotateLoadingText();
    const existingCharacters: Model[] = Models.map(m => {
      m.stats = (<any>Object).assign(m.stats, this.modelSelector.calculateStats(m.stats, m.value));
      return m;
    });
    await this.costPredictor.trainModel(existingCharacters);
    this.trainingDone = true;
    if (this.textInterval) {
      clearInterval(this.textInterval);
    }
  }

  ngOnDestroy() {
    if (this.textInterval) {
      clearInterval(this.textInterval);
    }
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

  onTypeChange(event: MatSelectChange): void {
    const type = event.value;
    if (type === 'Leader' || type === 'Caster') {
      this.characterForm.get('stats.type')?.setValue('Hero');
      this.characterForm.get('stats.type')?.disable();
      this.setAbilitiesForModelType('Hero');
      if (type === 'Leader' && !this.talent.value.includes('Leader')) {
        this.talent.push(this.fb.control('Leader'));
      }
      if (type === 'Caster') {
        this.characterForm.get('stats.casting')?.setValue(true);
      }
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

  addWeapon(weaponType: 'melee' | 'range'): void {
    const control = this.characterForm.get(`stats.${weaponType}`) as FormArray;
    control.push(this.fb.group({ weapon: '', rating: [8] }));
  }

  removeWeapon(weaponType: 'melee' | 'range', index: number): void {
    const control = this.characterForm.get(`stats.${weaponType}`) as FormArray;
    control.removeAt(index);
  }

  addTalent(): void {
    this.talent.push(this.fb.control(''));
  }

  removeTalent(index: number): void {
    this.talent.removeAt(index);
  }

  private rotateLoadingText(): void {
    this.loadingTexts = this.loadingTexts.sort(() => Math.random() - 0.5);
    this.currentLoadingText = this.loadingTexts[0];
    this.textInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.loadingTexts.length;
      this.currentLoadingText = this.loadingTexts[this.currentIndex];
    }, 3000);
  }

}
