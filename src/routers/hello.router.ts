import { helloController } from '@controllers/hello.controller';
import { Router } from 'express';

const router: Router = Router();
const baseUrl: string = '/hello';

router.post(baseUrl, helloController.sayHello);

export const helloRouter: Router = router;
