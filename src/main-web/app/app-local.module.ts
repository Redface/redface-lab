import { NgModule } from '@angular/core';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryOverrideMockDbService } from './shared/mock-data/in-memory-override-mock-db.service';
import { NG_MODULE } from './app-common.module';

if (process.env.NODE_ENV === 'local') {
  NG_MODULE.imports.push(
    InMemoryWebApiModule.forRoot(InMemoryOverrideMockDbService, {delay: 100, passThruUnknownUrl: true}));
}

@NgModule(NG_MODULE)
export class AppLocalModule {
}
