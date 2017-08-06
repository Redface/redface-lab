import { Type, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

import { RequestHandler } from '../shared/handlers/requestHandler';
import { RequestExceptionHandler } from '../shared/handlers/requestExceptionHandler';
import { AppModel } from '../core/models/app.model';
import { StoreModule } from '@ngrx/store';
import { appReducer } from '../shared/reducers/app.reducer';

const NG_MODULES: Array<Type<any> | ModuleWithProviders | any[]> =
  <any>[HttpClientModule, CommonModule];
const THIRDPARTY_MODULES: Array<Type<any> | ModuleWithProviders | any[]> = [StoreModule.forRoot({ counter: appReducer })];

const NG_PROVIDERS: Array<Type<any> | ModuleWithProviders | any[]> = <any>[Title];
const THIRDPARTY_PROVIDERS: Array<Type<any> | ModuleWithProviders | any[]> = [];
const CUSTOMISED_PROVIDERS: Array<Type<any> | ModuleWithProviders | any[]> =
  <any>[RequestHandler, RequestExceptionHandler];

@NgModule({
  imports: [NG_MODULES, THIRDPARTY_MODULES],
  providers: [NG_PROVIDERS, THIRDPARTY_PROVIDERS, CUSTOMISED_PROVIDERS],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
