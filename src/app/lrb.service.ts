import { Injectable } from '@angular/core';

@Injectable()
export class LRBService {
    version: string;
    buildingRules: string;
    altLeaderRules: string;

    constructor() {
        this.version = '26-1';
        this.buildingRules = '108';
        this.altLeaderRules = '110';
    }
}