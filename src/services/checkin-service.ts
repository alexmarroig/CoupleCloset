import { prisma } from '../config/prisma';

export async function createCheckin(userId: string, coupleId: string, data: {
  mood: number;
  energy: number;
  notes?: string;
}) {
  return prisma.relationshipCheckin.create({
    data: {
      userId,
      coupleId,
      mood: data.mood,
      energy: data.energy,
      notes: data.notes,
    },
  });
}

export async function getCoupleCheckins(coupleId: string) {
  return prisma.relationshipCheckin.findMany({
    where: { coupleId },
    orderBy: { createdAt: 'desc' },
    include: { user: { select: { firstName: true } } },
  });
}

export async function getAlignment(coupleId: string) {
  const last7Days = new Date();
  last7Days.setDate(last7Days.getDate() - 7);

  const checkins = await prisma.relationshipCheckin.findMany({
    where: {
      coupleId,
      createdAt: { gte: last7Days },
    },
    orderBy: { createdAt: 'desc' },
  });

  if (checkins.length < 2) return { score: 100, status: 'INITIAL' };

  // Calculate alignment score
  // We look at the most recent checkin from each user
  const latestByUser: Record<string, any> = {};
  for (const c of checkins) {
      if (!latestByUser[c.userId]) {
          latestByUser[c.userId] = c;
      }
  }

  const userIds = Object.keys(latestByUser);
  if (userIds.length < 2) return { score: 100, status: 'WAITING_PARTNER' };

  const diffMood = Math.abs(latestByUser[userIds[0]].mood - latestByUser[userIds[1]].mood);
  const diffEnergy = Math.abs(latestByUser[userIds[0]].energy - latestByUser[userIds[1]].energy);

  // Score from 0 to 100
  // Max diff is 4 (5-1), so max total diff is 8.
  const score = Math.max(0, 100 - (diffMood + diffEnergy) * 10);

  return {
    score,
    status: score > 70 ? 'ALIGNED' : 'DESALIGNED',
    recommendation: score <= 70 ? 'SUGGEST_RECONNECTION' : 'MAINTAIN_FLOW'
  };
}
