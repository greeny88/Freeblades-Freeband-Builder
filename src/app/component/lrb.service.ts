import { Injectable } from '@angular/core';

@Injectable()
export class LRBService {
    version: string;
    buildingRules: string;
    altLeaderRules: string;

    constructor() {
        this.version = '22-1';
        this.buildingRules = '98';
        this.altLeaderRules = '101';
    }
}