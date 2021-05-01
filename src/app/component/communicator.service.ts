import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable()
export class CommunicatorService {
    public messageEvent: Subject<any> = new Subject();
    private componentMessages: {[name: string]: Subject<any>} = {};
    prebuiltFreeband: Object;

    constructor() {
        // console.log('CommunicatorService');
    }

    sendMessage(to: string, message: any) {
        if (!(to in this.componentMessages)) {
            this.componentMessages[to] = new Subject();
        }
        this.componentMessages[to].next(message);
    }

    getMessage(name: string) {
        if (!(name in this.componentMessages)) {
            this.componentMessages[name] = new Subject();
        }
        return this.componentMessages[name];
    }
}