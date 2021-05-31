import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";


@Injectable()
export class CommunicatorService {
    private prebuiltFreeband: Object;
    private navSub: Subject<undefined>;

    constructor() {
        this.navSub = new Subject();
    }

    setFreeband(freeband: Object) {
        this.prebuiltFreeband = freeband;
    }

    getFreeband() {
        return new Observable(observer => {
            observer.next(this.prebuiltFreeband);
            // this.prebuiltFreeband = undefined;
            observer.complete();

            return {
                unsubscribe() {
                    this.prebuiltFreeband = undefined;
                }
            };
        });
    }

    closeNav() {
        this.navSub.next(undefined);
    }

    closeNavTrigger() {
        return this.navSub;
    }
}