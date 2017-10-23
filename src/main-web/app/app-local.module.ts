import { NgModule } from '@angular/core';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api/http-client-in-memory-web-api.module';

import { NG_MODULE } from './app-common.module';
import { InMemoryOverrideMockDbService } from './shared/mock-data/in-memory-override-mock-db.service';

if (process.env.NODE_ENV === 'local') {
  NG_MODULE.imports.push(HttpClientInMemoryWebApiModule.forRoot(InMemoryOverrideMockDbService, {
    delay: 100,
    passThruUnknownUrl: false
  }));
}

@NgModule(NG_MODULE)
export class AppLocalModule {
}
