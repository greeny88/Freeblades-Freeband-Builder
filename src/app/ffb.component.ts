import { Component } from '@angular/core';

import template from './ffb.html';

@Component({
    selector: 'freeband-builder',
    template
})
export class FFBComponent {

    constructor() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('service-worker.js').then(registration => {
                    console.log('SW registered: ', registration);
                    // TODO: display message to refresh
                }).catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
            });
        }
    }
}