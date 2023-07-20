import { Injectable } from '@angular/core';

@Injectable()
export class LRBService {
    version: string;
    buildingRules: string;
    altLeaderRules: string;

    constructor() {
        this.version = '23-1';
        this.buildingRules = '101';
        this.altLeaderRules = '105';
    }
}