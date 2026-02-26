import { Router } from 'express';
import authRoutes from './auth-routes';
import quizRoutes from './quiz-routes';
import dateIdeaRoutes from './date-idea-routes';
import shopifyRoutes from './shopify-routes';
import wishlistRoutes from './wishlist-routes';
import adminRoutes from './admin-routes';
import checkinRoutes from './checkin-routes';
import watchRoutes from './watch-routes';
import astrologyRoutes from './astrology-routes';
import calendarRoutes from './calendar-routes';
import profileRoutes from './profile-routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/quizzes', quizRoutes);
router.use('/date-ideas', dateIdeaRoutes);
router.use('/checkins', checkinRoutes);
router.use('/watch', watchRoutes);
router.use('/astrology', astrologyRoutes);
router.use('/calendar', calendarRoutes);
router.use('/profile', profileRoutes);
router.use('/', shopifyRoutes);
router.use('/', wishlistRoutes);
router.use('/admin', adminRoutes);

export default router;
