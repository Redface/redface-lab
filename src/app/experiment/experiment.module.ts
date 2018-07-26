import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ExperimentComponent} from './experiment.component';
import {ExperimentRoutingModule} from './experiment.routing.module';
import {GridComponent} from './grid/grid.component';
import {ExperimentListComponent} from './experiment-list/experiment-list.component';
import {TurntablesComponent} from './turntables/turntables.component';
import {VinyleComponent} from './turntables/vinyle/vinyle.component';
import {MixerComponent} from './turntables/mixer/mixer.component';

@NgModule({
  imports: [CommonModule, ExperimentRoutingModule, BrowserAnimationsModule],
  providers: [],
  declarations: [ExperimentComponent, ExperimentListComponent, GridComponent, TurntablesComponent, VinyleComponent, MixerComponent],
  exports: [ExperimentComponent]
})
export class ExperimentModule {
}
