import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { ExperimentComponent } from './experiment.component';
import { ExperimentRoutingModule } from './experiment.routing.module';
import { GridComponent } from './grid/grid.component';
import { ExperimentListComponent } from './experiment-list/experiment-list.component';
import { NgrxComponent } from './ngrx/ngrx.component';
import { NgrxStoreModule } from './ngrx/store/ngrx-store.module';

@NgModule({
  imports: [CommonModule, ExperimentRoutingModule, NgrxStoreModule],
  providers: [],
  declarations: [ExperimentComponent, ExperimentListComponent, GridComponent, NgrxComponent],
  exports: [StoreModule, ExperimentComponent]
})
export class ExperimentModule {
}
