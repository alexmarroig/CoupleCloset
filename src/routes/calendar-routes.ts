import { Router } from 'express';
import * as calendarController from '../controllers/calendar-controller';

const router = Router();

router.get('/couple/:coupleId', calendarController.getCoupleCalendar);
router.post('/', calendarController.addSpecialDate);

export default router;
