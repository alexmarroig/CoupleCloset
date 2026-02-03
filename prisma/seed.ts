import { PrismaClient, QuizScope, DateIdeaScope } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const quiz = await prisma.quiz.upsert({
    where: { title: 'Estilo do Casal' },
    update: {},
    create: {
      title: 'Estilo do Casal',
      description: 'Descubra o estilo predominante do casal.',
      scope: QuizScope.COUPLE,
      questions: {
        create: [
          {
            text: 'Qual programa preferem no fim de semana?',
            order: 1,
            options: {
              create: [
                { text: 'Ficar em casa', value: 'cozy' },
                { text: 'Sair para explorar', value: 'adventure' },
                { text: 'Programas culturais', value: 'culture' }
              ]
            }
          },
          {
            text: 'Como gostam de planejar encontros?',
            order: 2,
            options: {
              create: [
                { text: 'Tudo organizado', value: 'planner' },
                { text: 'Espontâneo', value: 'spontaneous' },
                { text: 'Mix dos dois', value: 'balanced' }
              ]
            }
          }
        ]
      }
    }
  });

  await prisma.quiz.upsert({
    where: { title: 'Linguagens do Amor' },
    update: {},
    create: {
      title: 'Linguagens do Amor',
      description: 'Entenda como cada pessoa demonstra amor.',
      scope: QuizScope.USER,
      questions: {
        create: [
          {
            text: 'O que faz você se sentir mais amado?',
            order: 1,
            options: {
              create: [
                { text: 'Presentes', value: 'gifts' },
                { text: 'Palavras de afirmação', value: 'words' },
                { text: 'Tempo de qualidade', value: 'time' },
                { text: 'Toque físico', value: 'touch' },
                { text: 'Atos de serviço', value: 'service' }
              ]
            }
          }
        ]
      }
    }
  });

  const tags = await prisma.$transaction([
    prisma.tag.upsert({ where: { name: 'em casa' }, update: {}, create: { name: 'em casa' } }),
    prisma.tag.upsert({ where: { name: 'fora' }, update: {}, create: { name: 'fora' } }),
    prisma.tag.upsert({ where: { name: 'barato' }, update: {}, create: { name: 'barato' } }),
    prisma.tag.upsert({ where: { name: 'especial' }, update: {}, create: { name: 'especial' } })
  ]);

  const [homeTag, outTag, cheapTag, specialTag] = tags;

  await prisma.dateIdea.upsert({
    where: { title: 'Jantar caseiro temático' },
    update: {},
    create: {
      title: 'Jantar caseiro temático',
      description: 'Preparem juntos um jantar com tema especial.',
      scope: DateIdeaScope.GENERAL,
      tags: {
        create: [
          { tagId: homeTag.id },
          { tagId: cheapTag.id },
          { tagId: specialTag.id }
        ]
      }
    }
  });

  await prisma.dateIdea.upsert({
    where: { title: 'Passeio ao ar livre' },
    update: {},
    create: {
      title: 'Passeio ao ar livre',
      description: 'Escolham um parque ou trilha para explorar juntos.',
      scope: DateIdeaScope.GENERAL,
      tags: {
        create: [{ tagId: outTag.id }]
      }
    }
  });

  console.log({ quizId: quiz.id });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
