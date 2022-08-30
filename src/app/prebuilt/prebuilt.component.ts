import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CommunicatorService } from '../communicator.service';
import { PreBuiltFreebands } from './freebands';

interface Freeband {
    name: string, 
    faction: string, 
    freebandLimit: number, 
    altLeader: boolean, 
    models: {displayName: string, type?: string}[]
};

@Component({
    selector: 'app-prebuilt',
    templateUrl: './prebuilt.component.html',
    styleUrls: ['./prebuilt.component.scss']
})
export class PrebuiltComponent {
    // TODO: build ability to sort/filter list of freebands
    factions: string[];
    private originalList: Freeband[];
    prebuiltFreebands: Freeband[];
    selectedFaction: string | undefined = undefined;
    selectedValue: any | undefined = undefined;
    values: number[];

    constructor(private router: Router, private commService: CommunicatorService) {
        this.prebuiltFreebands = PreBuiltFreebands;
        this.prebuiltFreebands.sort((a,b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        this.originalList = this.prebuiltFreebands.slice();
        this.factions = this.prebuiltFreebands.map(freeband => {
            return freeband.faction;
        }).filter((v, i, a) => a.indexOf(v) === i).sort((a,b) => {
            if (a < b) {
                return -1;
            }
            if (a> b) {
                return 1;
            }
            return 0;
        });
        this.values = this.prebuiltFreebands.map(freeband => {
            return freeband.freebandLimit;
        }).filter((v, i, a) => a.indexOf(v) === i).sort((a,b) => {
            if (a < b) {
                return -1;
            }
            if (a> b) {
                return 1;
            }
            return 0;
        });
    }

    ngOnInit() { }

    filterSelection(faction: string | undefined, value: any) {
        console.log(`faction: ${faction}`);
        console.log(`value: ${value}`);
        this.prebuiltFreebands = this.originalList.filter(freeband => {
            return (freeband.faction === faction || [undefined,null,''].includes(faction)) && (freeband.freebandLimit === value || [undefined,null,''].includes(value));
        });
    }

    freebandSelected(freeband: Freeband) {
        this.commService.setFreeband(freeband);
        this.commService.closeNav();
        this.router.navigate(['/builder']);
    }
}