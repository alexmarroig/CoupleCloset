import { Router } from 'express';
import { authenticate } from '../middlewares/auth';
import { createOrderHandler, getProduct, listMyOrders, listProducts } from '../controllers/shopify-controller';

const router = Router();

router.get('/products', authenticate, listProducts);
router.get('/products/:id', authenticate, getProduct);
router.post('/orders', authenticate, createOrderHandler);
router.get('/me/orders', authenticate, listMyOrders);

export default router;
