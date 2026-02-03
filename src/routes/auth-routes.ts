import { Router } from 'express';
import { login, profile, refresh, register } from '../controllers/auth-controller';
import { authenticate } from '../middlewares/auth';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/refresh', refresh);
router.get('/me', authenticate, profile);

export default router;
