import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class DbService {
    private dbConnection: Subject<IDBDatabase>;
    private db: IDBDatabase;

    constructor() {
        const request: IDBOpenDBRequest = window.indexedDB.open('freeband_builder', 1);
        this.dbConnection = new Subject();

        request.onerror = (e) => {
            console.error(e);
            throw e;
        }
        request.onsuccess = () => {
            // console.log('success');
            this.db = request.result;
            this.dbConnection.next(this.db);
        };
        request.onupgradeneeded = (e: IDBVersionChangeEvent) => {
            // console.log('upgrade');
            const objectStore: IDBObjectStore = (<any>e.target).result.createObjectStore('previous', { keyPath: 'faction' });
        };
    }

    getPreviousFreeband(): Subject<Object> {
        const freebandObsrv = new Subject<Object>();
        this.dbConnection.subscribe(connection => {
            const transaction: IDBTransaction = connection.transaction('previous', 'readonly');
            const objectStore: IDBObjectStore = transaction.objectStore('previous');

            let freeband = undefined;
            objectStore.openCursor().onsuccess = (e: Event) => {
                const cursor: IDBCursorWithValue = (<any>e.target).result;

                if (cursor) {
                    if (cursor.value) {
                        freeband = cursor.value;
                    }
                    cursor.continue();
                } else {
                    freebandObsrv.next(freeband);
                }
            };
        });
        if (this.db) {
            this.dbConnection.next(this.db);
        }
        return freebandObsrv;
    }

    deleteOldFreeband() {
        this.dbConnection.subscribe(connection => {
            const transaction: IDBTransaction = connection.transaction('previous', 'readwrite');
            const objectStore: IDBObjectStore = transaction.objectStore('previous');

            const request: IDBRequest<undefined> = objectStore.clear();

            // request.onsuccess = () => console.log('Clear request was successful.');
            // transaction.oncomplete = () => console.log('Transaction was successful.');
            transaction.onerror = (e) => console.error(e);
        });
        if (this.db) {
            this.dbConnection.next(this.db);
        }
    }

    saveCurrentFreeband(freeband) {
        this.dbConnection.subscribe(connection => {
            const transaction: IDBTransaction = connection.transaction('previous', 'readwrite');
            const objectStore: IDBObjectStore = transaction.objectStore('previous');

            const request: IDBRequest<IDBValidKey> = objectStore.put(freeband);

            // request.onsuccess = () => console.log('Add request was successful.');
            // transaction.oncomplete = () => console.log('Transaction was successful.');
            transaction.onerror = (e) => console.error(e);
        });
        if (this.db) {
            this.dbConnection.next(this.db);
        }
    }
}