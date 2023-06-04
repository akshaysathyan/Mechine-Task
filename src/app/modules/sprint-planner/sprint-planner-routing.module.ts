import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SprintPlannerComponent } from './sprint-planner.component';
import { SprintListComponent } from './sprint-list/sprint-list.component';

const routes: Routes = [
  { path: '', component: SprintPlannerComponent },
  { path: 'list', component: SprintListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SprintPlannerRoutingModule {}
