import { Injectable, NotImplementedException } from '@nestjs/common';
import { BaseUseCase } from 'src/base/base.use-case';

@Injectable()
export class MockUseCase<TInput, TOutput> extends BaseUseCase<TInput, TOutput> {
  activate(input: TInput): TOutput | Promise<TOutput> {
    throw new NotImplementedException();
  }
}
