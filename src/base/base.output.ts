export abstract class BaseOutput {
  errors?: Array<string>;
  constructor(errs?: Array<string>) {
    this.errors = errs;
  }
}
