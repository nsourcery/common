export abstract class BaseUseCase<TInput, TOutput> {
  abstract activate(input: TInput): TOutput | Promise<TOutput>;
}
