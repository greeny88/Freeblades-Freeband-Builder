import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Model } from '../../model';
import template from './edit-model.html';

@Component({
    selector: 'edit-model',
    template
})
export class EditModelComponent {

    constructor(private dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public model: Model) {}

    ngOnInit() {
        console.log(this.model);
    }
}