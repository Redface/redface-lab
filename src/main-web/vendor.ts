import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

// Other vendors for example Lodash, angular2-jwt

import { enableProdMode } from '@angular/core';
if (process.env.NODE_ENV === 'prod') {
  enableProdMode();
}
