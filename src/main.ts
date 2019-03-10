import * as Koa from 'koa';
import * as Router from 'koa-router';
import { ApolloServer, gql } from 'apollo-server-koa';

import { environment } from './config';
import { errorMiddleware } from './middlewares/error-middleware';

const createApplication = (): Koa => new Koa();
const createAppRouter = (): Router =>
  new Router({
    prefix: '/api/v1'
  });


export const setupApolloServer = (app: Koa): void => {
  const apolloServer = new ApolloServer({ schema: {} });

  apolloServer.applyMiddleware({ app });
};

const app = createApplication();
const router = createAppRouter();

setupApolloServer(app);

app.use(errorMiddleware).use(router.routes());

app.listen(environment.port, () => {
  console.log('Hoooray!');
});
