import { Type, ModuleWithProviders } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api/http-client-in-memory-web-api.module';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { ExperimentModule } from './experiment/experiment.module';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { AboutModule } from './about/about.module';
import { environment } from '../environments/environment';
import { InMemoryOverrideMockDbService } from './shared/mock-data/in-memory-override-mock-db.service';

const NG_MODULES: Array<Type<any> | ModuleWithProviders | any[]> =
  <any>[BrowserModule];

const THIRDPARTY_MODULES: Array<Type<any> | ModuleWithProviders | any[]> = [StoreModule.forRoot([])];
const CUSTOMISED_MODULES: Array<Type<any> | ModuleWithProviders | any[]> =
  <any>[CoreModule, AboutModule, ExperimentModule, AppRoutingModule]; // order matters, AppRoutingModules should come last

const modules: Array<Type<any> | ModuleWithProviders | any[]> = [NG_MODULES, THIRDPARTY_MODULES, CUSTOMISED_MODULES];

const NG_PROVIDERS: Array<Type<any> | ModuleWithProviders | any[]> = <any>[Title];
const THIRDPARTY_PROVIDERS: Array<Type<any> | ModuleWithProviders | any[]> = [];
const CUSTOMISED_PROVIDERS: Array<Type<any> | ModuleWithProviders | any[]> = <any>[AppService];

if (environment.production === false) {
  modules.push(HttpClientInMemoryWebApiModule.forRoot(InMemoryOverrideMockDbService, {
    delay: 100,
    passThruUnknownUrl: false
  }));
}
export const NG_MODULE = {
  imports: modules,
  providers: [NG_PROVIDERS, THIRDPARTY_PROVIDERS, CUSTOMISED_PROVIDERS],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
};
