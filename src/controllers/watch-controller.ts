import { Request, Response, NextFunction } from 'express';
import * as watchService from '../services/watch-service';

export async function getRecommendations(req: Request, res: Response, next: NextFunction) {
  try {
    const { mood, duration } = req.query;
    const recommendations = await watchService.getRecommendations(mood as string, Number(duration) || 120);
    res.json(recommendations);
  } catch (error) {
    next(error);
  }
}
