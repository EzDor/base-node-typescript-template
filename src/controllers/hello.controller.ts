import { Request, Response } from 'express';
import { constants } from 'http2';
import { helloService } from '@services/hello.service';

class HelloController {
  public async sayHello(req: Request, res: Response) {
    try {
      helloService.sayHello();
      return res.status(constants.HTTP_STATUS_OK).json('Hello World!');
    } catch (error) {
      console.log(error);
      return res.sendStatus(constants.HTTP_STATUS_BAD_REQUEST);
    }
  }
}

export const helloController: HelloController = new HelloController();
