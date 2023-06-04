import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { DialogeComponent } from './dialoge/dialoge.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogeService {
  constructor(private dialog: MatDialog) {}

  openDialog(data: any): MatDialogRef<DialogeComponent> | undefined {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;

    const dialogRef: MatDialogRef<DialogeComponent> = this.dialog.open(
      DialogeComponent,
      dialogConfig
    );

    return dialogRef;
  }
}
