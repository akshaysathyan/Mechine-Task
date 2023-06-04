import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SprintPlannerRoutingModule } from './sprint-planner-routing.module';
import { SprintPlannerComponent } from './sprint-planner.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SprintListComponent } from './sprint-list/sprint-list.component';

@NgModule({
  declarations: [SprintPlannerComponent, SprintListComponent],
  imports: [
    CommonModule,
    SprintPlannerRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
  ],
})
export class SprintPlannerModule {}
