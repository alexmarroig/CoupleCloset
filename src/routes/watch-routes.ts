import { Router } from 'express';
import * as watchController from '../controllers/watch-controller';

const router = Router();

router.get('/recommendations', watchController.getRecommendations);

export default router;
