import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { ExperimentComponent } from './experiment.component';
import { ExperimentRoutingModule } from './experiment.routing.module';
import { GridComponent } from './grid/grid.component';
import { ExperimentListComponent } from './experiment-list/experiment-list.component';
import { NgrxComponent } from './ngrx/ngrx.component';
import { ngrxReducer } from './ngrx/store/ngrx.reducer';
import { NgrxModel } from './ngrx/store/ngrx.model';

@NgModule({
  imports: [CommonModule, ExperimentRoutingModule, StoreModule.forFeature('ngrx', ngrxReducer)],
  providers: [NgrxModel],
  declarations: [ExperimentComponent, ExperimentListComponent, GridComponent, NgrxComponent],
  exports: [StoreModule, ExperimentComponent]
})
export class ExperimentModule {
}
