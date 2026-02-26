import { Router } from 'express';
import * as profileController from '../controllers/profile-controller';
import { authenticate } from '../middlewares/authenticate';

const router = Router();

router.get('/me', authenticate, profileController.getMe);
router.post('/preferences', authenticate, profileController.updatePreferences);

export default router;
