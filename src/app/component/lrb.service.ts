import { Injectable } from '@angular/core';

@Injectable()
export class LRBService {
    version: string;
    buildingRules: string;
    altLeaderRules: string;

    constructor() {
        this.version = '21-1';
        this.buildingRules = '96';
        this.altLeaderRules = '';
    }
}