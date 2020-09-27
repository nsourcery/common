export abstract class BaseRouter<TInput, TOutput> {
  abstract activate(input: TInput): TOutput | Promise<TOutput>;
}
