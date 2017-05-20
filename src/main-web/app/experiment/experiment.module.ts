import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperimentComponent } from './experiment.component';
import { ExperimentRoutingModule } from './experiment.routing.module';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [CommonModule, ExperimentRoutingModule],
  providers: [],
  declarations: [ExperimentComponent, GridComponent],
  exports: [ExperimentComponent]
})
export class ExperimentModule {
}
