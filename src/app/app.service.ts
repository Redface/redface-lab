import { Injectable } from '@angular/core';

import { RequestHandler } from './shared/handlers/requestHandler';

@Injectable()
export class AppService {
  constructor(private requestHandler:RequestHandler) {
  }
}
