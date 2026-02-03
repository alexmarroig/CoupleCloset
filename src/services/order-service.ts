import { prisma } from '../config/prisma';
import { createShopifyOrder } from './shopify-service';

export async function createOrder(input: {
  userId: string;
  lineItems: Array<{ productId: string; variantId: string; quantity: number }>;
  currency: string;
}) {
  const order = await createShopifyOrder({
    lineItems: input.lineItems,
    currency: input.currency
  });

  const totalAmount = order.total_price ? Number(order.total_price) : 0;

  const saved = await prisma.order.create({
    data: {
      userId: input.userId,
      shopifyOrderId: String(order.id),
      totalAmount,
      currency: input.currency
    }
  });

  return { order, saved };
}

export async function listOrders(userId: string) {
  return prisma.order.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' }
  });
}
