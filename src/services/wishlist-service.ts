import { prisma } from '../config/prisma';

export async function listWishlist(coupleId: string) {
  return prisma.wishlistItem.findMany({
    where: { coupleId },
    orderBy: { createdAt: 'desc' }
  });
}

export async function createWishlistItem(input: {
  coupleId: string;
  userId: string;
  shopifyProductId: string;
  title: string;
  imageUrl?: string;
  price: number;
}) {
  return prisma.wishlistItem.create({
    data: {
      coupleId: input.coupleId,
      userId: input.userId,
      shopifyProductId: input.shopifyProductId,
      title: input.title,
      imageUrl: input.imageUrl,
      price: input.price
    }
  });
}

export async function updateWishlistItem(itemId: string, status: 'AVAILABLE' | 'RESERVED' | 'PURCHASED') {
  return prisma.wishlistItem.update({
    where: { id: itemId },
    data: { status }
  });
}
