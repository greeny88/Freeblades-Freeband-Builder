import { Injectable } from '@angular/core';

@Injectable()
export class NameGeneratorService {
    raceNameGenerator = {
        'Chalar': this.chalarName
    };

    constructor() {}

    generateName(race: string, gender: string): string {
        if (race in this.raceNameGenerator) {
            return this.raceNameGenerator[race](gender);
        }
        return '';
    }

    private chalarName(gender: string): string {
        const chalerMalePrefix: string[] = [
            'Adra',
            'Aga',
            'Agra',
            'Dam',
            'Dio',
            'Dur',
            'Hem',
            'Hak',
            'Kal',
            'Kas',
            'Kra',
            'Kyr',
            'Mak',
            'Ner',
            'Rik',
            'Pal',
            'Raf',
            'Rak',
            'Tak',
            'Fad',
            'Faz'
        ];
        const chalerMaleSuffix: string[] = [
            'mai',
            'zai',
            'tai',
            'rik',
            'zar',
            'izar',
            'star',
            'istar',
            'aba',
            'lem',
            'arus'
        ];
        const chalerFemalePrefix: string[] = [
            'Adel',
            'Ari',
            'Kela',
            'Dar',
            'Del',
            'Elek',
            'Elis',
            'Kas',
            'Kass',
            'Mel',
            'Meli',
            'Mela',
            'Nef',
            'Pen',
            'Pol',
            'Qua',
            'Quar',
            'Sher',
            'Zeno'
        ];
        const chalerFemaleSuffix: string[] = [
            'men',
            'emi',
            'remi',
            'ika',
            'tar',
            'ra',
            'tina',
            'essa',
            'hara',
            'ilah',
            'aysa',
            'sira'
        ];
        let prefixList;
        let suffixList;
        if (gender === 'M') {
            prefixList = chalerMalePrefix;
            suffixList = chalerMaleSuffix;
        } else if (gender === 'F') {
            prefixList = chalerFemalePrefix;
            suffixList = chalerFemaleSuffix;
        }
        let prefix = prefixList[this.getRandomNumber(prefixList.length)];
        let suffix = suffixList[this.getRandomNumber(suffixList.length)];

        return prefix + suffix;
    }

    private getRandomNumber(max: number): number {
        return Math.floor(Math.random() * max);
    }
}