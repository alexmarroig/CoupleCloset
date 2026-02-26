import { prisma } from '../config/prisma';

export async function getCoupleCalendar(coupleId: string) {
  const couple = await prisma.couple.findUnique({
    where: { id: coupleId },
    select: { anniversary: true, name: true }
  });

  const events = [];

  if (couple?.anniversary) {
    events.push({
      title: 'Our Anniversary',
      date: couple.anniversary,
      type: 'ANNIVERSARY',
    });
  }

  // Add more logic for birthdays, etc.

  return events;
}

export async function addSpecialDate(coupleId: string, data: {
  title: string;
  date: Date;
  type: string;
}) {
  // Logic to save a special date
  // Since we don't have a separate table for special dates,
  // we could add it to a new model or just return it for now.
  return { ...data, coupleId };
}
