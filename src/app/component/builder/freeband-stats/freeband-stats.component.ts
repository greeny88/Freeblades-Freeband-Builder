import { Component, Input } from '@angular/core';

import template from './freeband-stats.html';

@Component({
    selector: 'freeband-stats',
    template
})
export class FreebandStatsComponent {
    @Input() followerTotal: number;
    @Input() freebandBaseValue: number;
    @Input() heroTotal: number;
    @Input() totalLifePoints: number;
    breakValue: number;

    constructor() {}

    ngOnChanges() {
        this.breakValue = Math.ceil(this.totalLifePoints / 2);
    }
}