import { Request, Response } from 'express';
import { AuthRequest } from '../middlewares/auth';
import { createDateIdea, getRecommendations, listDateIdeas } from '../services/date-idea-service';
import { parseSchema } from '../utils/validation';
import { dateIdeaCreateSchema } from '../validators/date-idea';

export async function list(req: Request, res: Response) {
  const ideas = await listDateIdeas();
  return res.json(ideas);
}

export async function create(req: AuthRequest, res: Response) {
  try {
    const data = parseSchema(dateIdeaCreateSchema, req.body);
    const idea = await createDateIdea(data);
    return res.status(201).json(idea);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function recommendations(req: AuthRequest, res: Response) {
  const coupleId = req.query.coupleId ? String(req.query.coupleId) : undefined;
  const ideas = await getRecommendations(coupleId);
  return res.json(ideas);
}
