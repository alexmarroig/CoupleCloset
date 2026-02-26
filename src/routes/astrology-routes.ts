import { Router } from 'express';
import * as astrologyController from '../controllers/astrology-controller';

const router = Router();

router.get('/synastry', astrologyController.getSynastry);
router.get('/forecast/couple/:coupleId', astrologyController.getWeeklyForecast);

export default router;
