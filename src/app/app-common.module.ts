import { Type, ModuleWithProviders } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { ExperimentModule } from './experiment/experiment.module';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { AboutModule } from './about/about.module';
import { environment } from '../environments/environment';

const NG_MODULES: Array<Type<any> | ModuleWithProviders | any[]> = <any>[BrowserModule];

const THIRDPARTY_MODULES: Array<Type<any> | ModuleWithProviders | any[]> = [];
const CUSTOMISED_MODULES: Array<Type<any> | ModuleWithProviders | any[]> =
  <any>[CoreModule, AboutModule, ExperimentModule, AppRoutingModule]; // order matters, AppRoutingModules should come last

const modules: Array<Type<any> | ModuleWithProviders | any[]> = [NG_MODULES, THIRDPARTY_MODULES, CUSTOMISED_MODULES];

const NG_PROVIDERS: Array<Type<any> | ModuleWithProviders | any[]> = <any>[Title];
const THIRDPARTY_PROVIDERS: Array<Type<any> | ModuleWithProviders | any[]> = [];
const CUSTOMISED_PROVIDERS: Array<Type<any> | ModuleWithProviders | any[]> = <any>[AppService];

if (environment.production === false) {
  // modules.push(HttpClientInMemoryWebApiModule.forRoot(InMemoryOverrideMockDbService, {
  //   delay: 100,
  //   passThruUnknownUrl: false
  // }));
}
export const NG_MODULE = {
  imports: modules,
  providers: [NG_PROVIDERS, THIRDPARTY_PROVIDERS, CUSTOMISED_PROVIDERS],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
};
