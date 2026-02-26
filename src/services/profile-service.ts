import { prisma } from '../config/prisma';

export async function getUserProfile(userId: string) {
  return prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      birthDate: true,
      birthTime: true,
      birthPlace: true,
      preferences: true,
      coupleMembers: {
        include: {
          couple: {
            include: {
              members: {
                include: {
                  user: {
                    select: {
                      id: true,
                      firstName: true,
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
}

export async function updatePreferences(id: string, type: 'USER' | 'COUPLE', preferences: any) {
  if (type === 'USER') {
    return prisma.user.update({
      where: { id },
      data: { preferences }
    });
  } else {
    return prisma.couple.update({
      where: { id },
      data: { preferences }
    });
  }
}

export async function createCouple(name: string, userIds: string[]) {
  return prisma.couple.create({
    data: {
      name,
      members: {
        create: userIds.map(userId => ({ userId }))
      }
    }
  });
}
