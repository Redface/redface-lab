import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperimentComponent } from './experiment.component';
import { GridComponent } from './grid/grid.component';

const experimentRoutes:Routes = <Routes>[
  {
    path: 'experiment',
    component: ExperimentComponent,
    children: [
      {path: 'grid', component: GridComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(experimentRoutes)],
  exports: [RouterModule]
})
export class ExperimentRoutingModule {
}
