import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class MockConfigService {
  constructor() {}
  get(key: string): string {
    throw new NotImplementedException();
  }
}
