import { prisma } from '../config/prisma';

export async function listQuizzes() {
  return prisma.quiz.findMany({
    where: { isActive: true },
    include: { questions: { include: { options: true } } }
  });
}

export async function getQuiz(id: string) {
  return prisma.quiz.findUnique({
    where: { id },
    include: { questions: { include: { options: true } } }
  });
}

export async function createQuiz(input: {
  title: string;
  description?: string;
  scope: 'USER' | 'COUPLE';
  isActive?: boolean;
  questions: Array<{
    text: string;
    order: number;
    options: Array<{ text: string; value: string }>;
  }>;
}) {
  return prisma.quiz.create({
    data: {
      title: input.title,
      description: input.description,
      scope: input.scope,
      isActive: input.isActive ?? true,
      questions: {
        create: input.questions.map((question) => ({
          text: question.text,
          order: question.order,
          options: { create: question.options }
        }))
      }
    },
    include: { questions: { include: { options: true } } }
  });
}

export async function createQuizResult(input: {
  quizId: string;
  userId: string;
  coupleId?: string | null;
  answers: Record<string, string>;
  score?: Record<string, unknown> | null;
}) {
  return prisma.quizResult.create({
    data: {
      quizId: input.quizId,
      userId: input.userId,
      coupleId: input.coupleId ?? undefined,
      answers: input.answers,
      score: input.score ?? undefined
    }
  });
}

export async function listQuizResults(userId: string) {
  return prisma.quizResult.findMany({
    where: { userId },
    include: { quiz: true }
  });
}
