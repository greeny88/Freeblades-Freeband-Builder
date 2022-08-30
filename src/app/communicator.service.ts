import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

interface Freeband {
    name: string, 
    faction: string, 
    freebandLimit: number, 
    altLeader: boolean, 
    models: {displayName: string, type?: string}[]
};

@Injectable()
export class CommunicatorService {
    private prebuiltFreeband: Freeband | undefined = undefined;
    private navSub: Subject<undefined>;

    constructor() {
        this.navSub = new Subject();
    }

    setFreeband(freeband: Freeband) {
        this.prebuiltFreeband = freeband;
    }

    getFreeband() {
        return new Observable(observer => {
            observer.next(this.prebuiltFreeband);
            // this.prebuiltFreeband = undefined;
            observer.complete();

            // return {
            //     unsubscribe() {
            //         this.prebuiltFreeband = undefined;
            //     }
            // };
        });
    }

    closeNav() {
        this.navSub.next(undefined);
    }

    closeNavTrigger() {
        return this.navSub;
    }
}