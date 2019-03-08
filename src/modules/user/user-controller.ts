import * as Router from 'koa-router';

import { IUserService } from '.';

export const init = (userService: IUserService): Router => {
  const router: Router = new Router();


  return router;
};
