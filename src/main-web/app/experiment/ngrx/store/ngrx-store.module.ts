import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { ngrxReducer } from './ngrx.reducer';
import { NgrxModel } from './ngrx.model';


@NgModule({
  imports: [StoreModule.forFeature('ngrx', ngrxReducer)],
  providers: [NgrxModel],
  declarations: [],
  exports: []
})
export class NgrxStoreModule {
}
