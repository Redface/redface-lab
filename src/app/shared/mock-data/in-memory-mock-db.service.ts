import { InMemoryDbService } from 'angular-in-memory-web-api/interfaces';

export class InMemoryMockDbService implements InMemoryDbService {

  dbObj = {};


  constructor() {
    this.dbObj = {};
  }

  createDb() {
    return this.dbObj;
  }
}
