import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperimentsComponent } from './experiments.component';

@NgModule({
  imports: [CommonModule],
  providers: [],
  declarations: [ExperimentsComponent],
  exports: [ExperimentsComponent]
})
export class ExperimentsModule {
}
