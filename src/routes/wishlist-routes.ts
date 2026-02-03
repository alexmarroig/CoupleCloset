import { Router } from 'express';
import { authenticate } from '../middlewares/auth';
import { createMyWishlistItem, listMyWishlist, updateWishlist } from '../controllers/wishlist-controller';

const router = Router();

router.get('/me/wishlist', authenticate, listMyWishlist);
router.post('/me/wishlist', authenticate, createMyWishlistItem);
router.patch('/wishlist/:itemId', authenticate, updateWishlist);

export default router;
