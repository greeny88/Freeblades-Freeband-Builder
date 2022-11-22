import { Injectable } from '@angular/core';

@Injectable()
export class LRBService {
    version: string;
    buildingRules: string;
    altLeaderRules: string;

    constructor() {
        this.version = '22-3';
        this.buildingRules = '100';
        this.altLeaderRules = '103';
    }
}