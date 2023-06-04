import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'create-story',
        loadChildren: () =>
          import('../create-story/create-story.module').then(
            (m) => m.CreateStoryModule
          ),
      },
      {
        path: 'story',
        loadChildren: () =>
          import('../stories/stories.module').then((m) => m.StoriesModule),
      },
      {
        path: 'sprint-planner',
        loadChildren: () =>
          import('../sprint-planner/sprint-planner.module').then(
            (m) => m.SprintPlannerModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
