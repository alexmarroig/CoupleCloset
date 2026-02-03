import { Request, Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
import { createQuiz, createQuizResult, getQuiz, listQuizzes, listQuizResults } from '../services/quiz-service';
import { parseSchema } from '../utils/validation';
import { quizCreateSchema, quizResultSchema } from '../validators/quiz';

export async function list(req: Request, res: Response) {
  const quizzes = await listQuizzes();
  return res.json(quizzes);
}

export async function detail(req: Request, res: Response) {
  const quiz = await getQuiz(req.params.id);
  if (!quiz) {
    return res.status(404).json({ message: 'Quiz not found' });
  }
  return res.json(quiz);
}

export async function createResult(req: AuthRequest, res: Response) {
  try {
    const data = parseSchema(quizResultSchema, req.body);
    const result = await createQuizResult({
      quizId: data.quizId,
      userId: req.user!.id,
      coupleId: req.query.coupleId ? String(req.query.coupleId) : undefined,
      answers: data.answers,
      score: data.score ?? undefined
    });
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function listMyResults(req: AuthRequest, res: Response) {
  const results = await listQuizResults(req.user!.id);
  return res.json(results);
}

export async function create(req: AuthRequest, res: Response) {
  try {
    const data = parseSchema(quizCreateSchema, req.body);
    const quiz = await createQuiz(data);
    return res.status(201).json(quiz);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}
