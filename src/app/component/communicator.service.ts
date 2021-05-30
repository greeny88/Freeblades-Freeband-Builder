import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class CommunicatorService {
    private prebuiltFreeband: Object;

    constructor() {
        // console.log('CommunicatorService');
    }

    sendMessage(freeband: Object) {
        this.prebuiltFreeband = freeband;
    }

    getMessage() {
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
}