import { Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
import { fetchProduct, fetchProducts } from '../services/shopify-service';
import { createOrder, listOrders } from '../services/order-service';
import { parseSchema } from '../utils/validation';
import { orderCreateSchema } from '../validators/order';

export async function listProducts(_req: AuthRequest, res: Response) {
  try {
    const products = await fetchProducts();
    return res.json(products);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function getProduct(req: AuthRequest, res: Response) {
  try {
    const product = await fetchProduct(req.params.id);
    return res.json(product);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function createOrderHandler(req: AuthRequest, res: Response) {
  try {
    const data = parseSchema(orderCreateSchema, req.body);
    const result = await createOrder({
      userId: req.user!.id,
      lineItems: data.lineItems,
      currency: data.currency
    });
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function listMyOrders(req: AuthRequest, res: Response) {
  const orders = await listOrders(req.user!.id);
  return res.json(orders);
}
