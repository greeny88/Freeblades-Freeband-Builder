import { Component, Input } from '@angular/core';

import template from './freeband-stats.html';

@Component({
    selector: 'freeband-stats',
    template
})
export class FreebandStatsComponent {
    @Input() freebandBaseValue: number;
    @Input() totalLifePoints: number;
    breakValue: number;

    constructor() {}

    ngOnChanges() {
        this.breakValue = Math.ceil(this.totalLifePoints / 2);
    }
}