import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  result: boolean
}


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponentDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
