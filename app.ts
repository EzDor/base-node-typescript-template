import { helloRouter } from '@routers/hello.router';
import express, { Application } from 'express';
import { HttpServer } from 'src/core/http-server';

class App {
  public static readonly PORT: number = 3000;
  private app: Application;
  private httpServer: HttpServer;
  private port: string | number;
  private baseUrl: string;

  constructor() {
    this.config();
    this.createApp();
  }

  private config(): void {
    this.port = process.env.PORT || App.PORT;
    this.baseUrl = '/api';
  }

  private createApp(): void {
    this.app = express();
    this.httpServer = new HttpServer(this.app, this.port);
  }
  private registerRoutes = (app: Application) => {
    app.use(this.baseUrl, helloRouter);
  };
}

export const app = new App();
