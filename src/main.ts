import * as Koa from 'koa';
import * as Router from 'koa-router';

import { environment } from './config';
import { bootstrap } from './bootstrapper';
import { errorMiddleware } from './middlewares/error-middleware';

const createApplication = (): Koa => new Koa();
const createAppRouter = (): Router => new Router({
    prefix: '/api/v1'
});

const app = createApplication();
const router = createAppRouter();

bootstrap(router);

app
    .use(errorMiddleware)
    .use(router.routes());

app.listen(environment.port, () => {
  console.log('Hoooray!');
});
