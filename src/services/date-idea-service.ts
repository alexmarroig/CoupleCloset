import { prisma } from '../config/prisma';

export async function listDateIdeas() {
  return prisma.dateIdea.findMany({
    include: { tags: { include: { tag: true } } }
  });
}

export async function createDateIdea(input: {
  title: string;
  description: string;
  scope?: 'GENERAL' | 'COUPLE';
  coupleId?: string;
  tagIds?: string[];
}) {
  return prisma.dateIdea.create({
    data: {
      title: input.title,
      description: input.description,
      scope: input.scope ?? 'GENERAL',
      coupleId: input.coupleId,
      tags: input.tagIds
        ? {
            create: input.tagIds.map((tagId) => ({ tagId }))
          }
        : undefined
    },
    include: { tags: { include: { tag: true } } }
  });
}

export async function getRecommendations(coupleId?: string) {
  return prisma.dateIdea.findMany({
    where: {
      OR: [
        { scope: 'GENERAL' },
        ...(coupleId ? [{ scope: 'COUPLE', coupleId }] : [])
      ]
    },
    include: { tags: { include: { tag: true } } }
  });
}
