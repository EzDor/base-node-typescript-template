import { Application } from 'express';
import { Server } from 'http';
import * as http from 'http';

export class HttpServer {
  private server: Server;

  constructor(app: Application, port: string | number) {
    this.createServer(app);
    this.listen(port);
  }

  get httpServerInstance(): Server {
    return this.server;
  }

  private createServer(app: Application): void {
    this.server = http.createServer(app);
  }
  private listen(port: string | number): void {
    this.server.listen(port, () => {
      console.log('Running server on port %s', port);
    });
  }
}
