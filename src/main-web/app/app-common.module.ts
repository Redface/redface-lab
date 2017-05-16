import { Type, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClarityModule } from 'clarity-angular';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RequestHandler, RequestExceptionHandler } from './shared/handlers';
import { AppService } from './app.service';

const NG_MODULES:Array<Type<any> | ModuleWithProviders | any[]> =
  <any>[BrowserModule, CommonModule, HttpModule, FormsModule, ReactiveFormsModule];

const THIRDPARTY_MODULES:Array<Type<any> | ModuleWithProviders | any[]> = [ClarityModule.forRoot()];
const CUSTOMISED_MODULES:Array<Type<any> | ModuleWithProviders | any[]> = <any>[AppRoutingModule, HomeModule];

const modules:Array<Type<any> | ModuleWithProviders | any[]> = [NG_MODULES, THIRDPARTY_MODULES, CUSTOMISED_MODULES];

const NG_PROVIDERS:Array<Type<any> | ModuleWithProviders | any[]> = <any>[Title];
const THIRDPARTY_PROVIDERS:Array<Type<any> | ModuleWithProviders | any[]> = [];
const CUSTOMISED_PROVIDERS:Array<Type<any> | ModuleWithProviders | any[]> = <any>[RequestHandler, RequestExceptionHandler, AppService];

export const NG_MODULE = {
  imports: modules,
  providers: [NG_PROVIDERS, THIRDPARTY_PROVIDERS, CUSTOMISED_PROVIDERS],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
};