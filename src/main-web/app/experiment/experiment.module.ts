import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperimentComponent } from './experiment.component';
import { ExperimentRoutingModule } from './experiment.routing.module';
import { GridComponent } from './grid/grid.component';
import { ExperimentListComponent } from './experiment-list/experiment-list.component';

@NgModule({
  imports: [CommonModule, ExperimentRoutingModule],
  providers: [],
  declarations: [ExperimentComponent, ExperimentListComponent, GridComponent],
  exports: [ExperimentComponent]
})
export class ExperimentModule {
}
