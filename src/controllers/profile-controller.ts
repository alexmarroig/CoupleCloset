import { Request, Response, NextFunction } from 'express';
import * as profileService from '../services/profile-service';

export async function getMe(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = (req as any).user?.id;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const profile = await profileService.getUserProfile(userId);
    res.json(profile);
  } catch (error) {
    next(error);
  }
}

export async function updatePreferences(req: Request, res: Response, next: NextFunction) {
  try {
    const { id, type, preferences } = req.body;
    const updated = await profileService.updatePreferences(id, type, preferences);
    res.json(updated);
  } catch (error) {
    next(error);
  }
}
