import { Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
import { createWishlistItem, listWishlist, updateWishlistItem } from '../services/wishlist-service';
import { parseSchema } from '../utils/validation';
import { wishlistCreateSchema, wishlistUpdateSchema } from '../validators/wishlist';

export async function listMyWishlist(req: AuthRequest, res: Response) {
  const coupleId = String(req.query.coupleId ?? '');
  if (!coupleId) {
    return res.status(400).json({ message: 'coupleId is required' });
  }
  const items = await listWishlist(coupleId);
  return res.json(items);
}

export async function createMyWishlistItem(req: AuthRequest, res: Response) {
  try {
    const coupleId = String(req.query.coupleId ?? '');
    if (!coupleId) {
      return res.status(400).json({ message: 'coupleId is required' });
    }
    const data = parseSchema(wishlistCreateSchema, req.body);
    const item = await createWishlistItem({
      coupleId,
      userId: req.user!.id,
      shopifyProductId: data.shopifyProductId,
      title: data.title,
      imageUrl: data.imageUrl,
      price: data.price
    });
    return res.status(201).json(item);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function updateWishlist(req: AuthRequest, res: Response) {
  try {
    const data = parseSchema(wishlistUpdateSchema, req.body);
    const item = await updateWishlistItem(req.params.itemId, data.status);
    return res.json(item);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}
