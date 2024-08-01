import { Injectable } from '@angular/core';

@Injectable()
export class LRBService {
    version: string;
    buildingRules: string;
    altLeaderRules: string;

    constructor() {
        this.version = '24-2';
        this.buildingRules = '104';
        this.altLeaderRules = '107';
    }
}