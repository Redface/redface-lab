import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperimentComponent } from './experiment.component';
import { ExperimentRoutingModule } from './experiment.routing.module';
import { GridComponent } from './grid/grid.component';
import { ExperimentListComponent } from './experiment-list/experiment-list.component';
import { NgrxModule } from './ngrx/ngrx.module';

@NgModule({
  imports: [CommonModule, ExperimentRoutingModule, NgrxModule],
  providers: [],
  declarations: [ExperimentComponent, ExperimentListComponent, GridComponent],
  exports: [ExperimentComponent]
})
export class ExperimentModule {
}
