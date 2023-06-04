import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogeComponent } from './dialoge.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DialogeComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
})
export class DialogeModule {}
