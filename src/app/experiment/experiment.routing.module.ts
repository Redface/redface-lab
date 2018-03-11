import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperimentComponent } from './experiment.component';
import { GridComponent } from './grid/grid.component';
import { ExperimentListComponent } from './experiment-list/experiment-list.component';
import { TurntablesComponent } from './turntables/turntables.component';

const experimentRoutes: Routes = <Routes>[
  {
    path: 'experiment',
    component: ExperimentComponent,
    children: [
      {path: '', component: ExperimentListComponent},
      {path: 'grid', component: GridComponent},
      {path: 'turntables', component: TurntablesComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(experimentRoutes)],
  exports: [RouterModule]
})
export class ExperimentRoutingModule {
}
