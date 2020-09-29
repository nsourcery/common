import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const InHeaders = createParamDecorator(
  async (data: any, ctx: ExecutionContext) => {
    return ctx.switchToHttp().getRequest().headers;
  },
);
