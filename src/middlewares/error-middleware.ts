import * as Koa from 'koa';

import { HttpResult } from './../helpers';

const selectErrorInfo = (e: Error): [number, string] => [-1, ''];

export const errorMiddleware = () => async (
  ctx: Koa.Context,
  next: Function
) => {
  try {
    await next();
  } catch (e) {
    const [statusCode, errorCode] = selectErrorInfo(e);

    ctx.body = HttpResult.error(errorCode, e.message);
    ctx.status = statusCode;
  }
};
