import { helloRouter } from '@routers/hello.router';
import express, { Express } from 'express';
import * as http from 'http';
import logger from 'morgan';

const server = async () => {
  const app = express();

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  registerRoutes(app);
  http.createServer(app).listen(3000);
};

const registerRoutes = (app: Express) => {
  const baseUrl: string = '/api';
  app.use(baseUrl, helloRouter);
};

server().then(() => console.log('server running'));
