import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxStoreModule } from './store/ngrx-store.module';
import { NgrxComponent } from './ngrx.component';


@NgModule({
  imports: [CommonModule, NgrxStoreModule],
  providers: [],
  declarations: [NgrxComponent],
  exports: [NgrxComponent]
})
export class NgrxModule {
}
