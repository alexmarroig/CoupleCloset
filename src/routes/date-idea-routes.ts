import { Router } from 'express';
import { authenticate, requireAdmin } from '../middlewares/auth';
import { create, list, recommendations } from '../controllers/date-idea-controller';

const router = Router();

router.get('/', list);
router.post('/', authenticate, requireAdmin, create);
router.get('/recommendations', authenticate, recommendations);

export default router;
