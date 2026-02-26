import { Request, Response, NextFunction } from 'express';
import * as checkinService from '../services/checkin-service';

export async function createCheckin(req: Request, res: Response, next: NextFunction) {
  try {
    const { userId, coupleId, mood, energy, notes } = req.body;
    const checkin = await checkinService.createCheckin(userId, coupleId, { mood, energy, notes });
    res.status(201).json(checkin);
  } catch (error) {
    next(error);
  }
}

export async function getCoupleCheckins(req: Request, res: Response, next: NextFunction) {
  try {
    const { coupleId } = req.params;
    const checkins = await checkinService.getCoupleCheckins(coupleId);
    res.json(checkins);
  } catch (error) {
    next(error);
  }
}

export async function getAlignment(req: Request, res: Response, next: NextFunction) {
  try {
    const { coupleId } = req.params;
    const alignment = await checkinService.getAlignment(coupleId);
    res.json(alignment);
  } catch (error) {
    next(error);
  }
}
