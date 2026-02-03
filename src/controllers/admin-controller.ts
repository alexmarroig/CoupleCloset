import { Request, Response } from 'express';
import { prisma } from '../config/prisma';

export async function listUsers(_req: Request, res: Response) {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      role: true,
      createdAt: true
    }
  });
  return res.json(users);
}

export async function listOrders(_req: Request, res: Response) {
  const orders = await prisma.order.findMany({
    include: { user: { select: { id: true, email: true } } }
  });
  return res.json(orders);
}
