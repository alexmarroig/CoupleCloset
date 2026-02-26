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
  category?: string;
  romantic?: number;
  fun?: number;
  cost?: number;
  energy?: number;
  isIndoor?: boolean;
  minDuration?: number;
}) {
  return prisma.dateIdea.create({
    data: {
      title: input.title,
      description: input.description,
      scope: input.scope ?? 'GENERAL',
      coupleId: input.coupleId,
      category: input.category,
      romantic: input.romantic ?? 0,
      fun: input.fun ?? 0,
      cost: input.cost ?? 1,
      energy: input.energy ?? 1,
      isIndoor: input.isIndoor ?? true,
      minDuration: input.minDuration,
      tags: input.tagIds
        ? {
            create: input.tagIds.map((tagId) => ({ tagId }))
          }
        : undefined
    },
    include: { tags: { include: { tag: true } } }
  });
}

export async function getRecommendations(params: {
  coupleId?: string;
  weather?: string;
  energy?: number;
  budget?: number;
  isIndoor?: boolean;
}) {
  const { coupleId, weather, energy, budget, isIndoor } = params;

  // Heuristics based on weather
  let filterIndoor = isIndoor;
  if (weather === 'RAINY' || weather === 'COLD') {
    filterIndoor = true;
  }

  const ideas = await prisma.dateIdea.findMany({
    where: {
      AND: [
        {
          OR: [
            { scope: 'GENERAL' },
            ...(coupleId ? [{ scope: 'COUPLE', coupleId }] : [])
          ]
        },
        ...(filterIndoor !== undefined ? [{ isIndoor: filterIndoor }] : []),
        ...(energy ? [{ energy: { lte: Number(energy) } }] : []),
        ...(budget ? [{ cost: { lte: Number(budget) } }] : [])
      ]
    },
    include: { tags: { include: { tag: true } } },
    orderBy: {
      romantic: 'desc'
    },
    take: 10
  });

  // If no ideas found with strict filters, fallback to general
  if (ideas.length === 0) {
      return prisma.dateIdea.findMany({
          where: { scope: 'GENERAL' },
          take: 3
      });
  }

  return ideas;
}
