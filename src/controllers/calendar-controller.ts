import { Request, Response, NextFunction } from 'express';
import * as calendarService from '../services/calendar-service';

export async function getCoupleCalendar(req: Request, res: Response, next: NextFunction) {
  try {
    const { coupleId } = req.params;
    const calendar = await calendarService.getCoupleCalendar(coupleId);
    res.json(calendar);
  } catch (error) {
    next(error);
  }
}

export async function addSpecialDate(req: Request, res: Response, next: NextFunction) {
  try {
    const { coupleId, title, date, type } = req.body;
    const specialDate = await calendarService.addSpecialDate(coupleId, { title, date: new Date(date), type });
    res.json(specialDate);
  } catch (error) {
    next(error);
  }
}
