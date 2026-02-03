import { Router } from 'express';
import authRoutes from './auth-routes';
import quizRoutes from './quiz-routes';
import dateIdeaRoutes from './date-idea-routes';
import shopifyRoutes from './shopify-routes';
import wishlistRoutes from './wishlist-routes';
import adminRoutes from './admin-routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/quizzes', quizRoutes);
router.use('/date-ideas', dateIdeaRoutes);
router.use('/', shopifyRoutes);
router.use('/', wishlistRoutes);
router.use('/admin', adminRoutes);

export default router;
