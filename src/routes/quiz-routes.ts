import { Router } from 'express';
import { authenticate, requireAdmin } from '../middlewares/auth';
import { create, createResult, detail, list, listMyResults } from '../controllers/quiz-controller';

const router = Router();

router.get('/', list);
router.get('/:id', detail);
router.post('/results', authenticate, createResult);
router.get('/me/results', authenticate, listMyResults);
router.post('/', authenticate, requireAdmin, create);

export default router;
