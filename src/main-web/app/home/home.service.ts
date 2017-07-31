import { Injectable } from '@angular/core';

import { RequestHandler } from '../shared/handlers/requestHandler';

@Injectable()
export class HomeService {

  constructor(private requestHandler:RequestHandler) {
  }
}
