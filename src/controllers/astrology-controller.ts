import { Request, Response, NextFunction } from 'express';
import * as astrologyService from '../services/astrology-service';

export async function getSynastry(req: Request, res: Response, next: NextFunction) {
  try {
    const { userId1, userId2 } = req.query;
    const synastry = await astrologyService.getSynastry(userId1 as string, userId2 as string);
    res.json(synastry);
  } catch (error) {
    next(error);
  }
}

export async function getWeeklyForecast(req: Request, res: Response, next: NextFunction) {
  try {
    const { coupleId } = req.params;
    const forecast = await astrologyService.getWeeklyForecast(coupleId);
    res.json(forecast);
  } catch (error) {
    next(error);
  }
}
