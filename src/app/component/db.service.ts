import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class DbService {
    // private dbConnection: IDBDatabase;
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
            console.log('success');
            // this.dbConnection = request.result;
            this.db = request.result;
            this.dbConnection.next(this.db);
        };
        request.onupgradeneeded = (e: IDBVersionChangeEvent) => {
            console.log('upgrade');
            const objectStore: IDBObjectStore = (<any>e.target).result.createObjectStore('previous', { keyPath: 'faction' });
            // objectStore.createIndex('freebandLimit', 'freebandLimit', { unique: false });
            // objectStore.createIndex('altLeader', 'altLeader', { unique: false });
            // objectStore.createIndex('models', 'models', { unique: false });
        };
    }

    getPreviousFreeband(): Subject<Object> {
        // const transaction: IDBTransaction = this.dbConnection.transaction(['freeband_db'], 'readonly');
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
        // const transaction: IDBTransaction = this.dbConnection.transaction(['freeband_db'], 'readwrite');
        this.dbConnection.subscribe(connection => {
            const transaction: IDBTransaction = connection.transaction('previous', 'readwrite');
            const objectStore: IDBObjectStore = transaction.objectStore('previous');

            const request: IDBRequest<undefined> = objectStore.clear();

            request.onsuccess = () => console.log('Clear request was successful.');
            transaction.oncomplete = () => console.log('Transaction was successful.');
            transaction.onerror = (e) => console.error(e);
        });
        if (this.db) {
            this.dbConnection.next(this.db);
        }
    }

    saveCurrentFreeband(freeband) {
        console.log('savefreeband');
        console.log(freeband);
        this.dbConnection.subscribe(connection => {
            const transaction: IDBTransaction = connection.transaction('previous', 'readwrite');
            const objectStore: IDBObjectStore = transaction.objectStore('previous');

            const request: IDBRequest<IDBValidKey> = objectStore.put(freeband);

            request.onsuccess = () => console.log('Add request was successful.');
            transaction.oncomplete = () => console.log('Transaction was successful.');
            transaction.onerror = (e) => console.error(e);
        });
        if (this.db) {
            this.dbConnection.next(this.db);
        }
    }
}