import { InMemoryDbService } from 'angular-in-memory-web-api/index';

export class InMemoryMockDbService implements InMemoryDbService {
  createDb() {
    return {};
  }
}
