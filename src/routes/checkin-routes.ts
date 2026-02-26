import { Router } from 'express';
import * as checkinController from '../controllers/checkin-controller';

const router = Router();

router.post('/', checkinController.createCheckin);
router.get('/couple/:coupleId', checkinController.getCoupleCheckins);
router.get('/alignment/:coupleId', checkinController.getAlignment);

export default router;
