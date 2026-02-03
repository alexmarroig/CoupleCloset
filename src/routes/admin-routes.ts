import { Router } from 'express';
import { authenticate, requireAdmin } from '../middlewares/auth';
import { listOrders, listUsers } from '../controllers/admin-controller';
import { create as createQuiz } from '../controllers/quiz-controller';
import { create as createDateIdea } from '../controllers/date-idea-controller';

const router = Router();

router.use(authenticate, requireAdmin);

router.get('/users', listUsers);
router.get('/orders', listOrders);
router.post('/quizzes', createQuiz);
router.post('/date-ideas', createDateIdea);

export default router;
