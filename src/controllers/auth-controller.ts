import { Request, Response } from 'express';
import { parseSchema } from '../utils/validation';
import { loginSchema, refreshSchema, registerSchema } from '../validators/auth';
import { getProfile, loginUser, refreshAccessToken, registerUser } from '../services/auth-service';
import { AuthRequest } from '../middlewares/auth';

export async function register(req: Request, res: Response) {
  try {
    const data = parseSchema(registerSchema, req.body);
    const result = await registerUser(data);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: (error as Error).message });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const data = parseSchema(loginSchema, req.body);
    const result = await loginUser(data.email, data.password);
    return res.json(result);
  } catch (error) {
    return res.status(401).json({ message: (error as Error).message });
  }
}

export async function refresh(req: Request, res: Response) {
  try {
    const data = parseSchema(refreshSchema, req.body);
    const result = await refreshAccessToken(data.refreshToken);
    return res.json(result);
  } catch (error) {
    return res.status(401).json({ message: (error as Error).message });
  }
}

export async function profile(req: AuthRequest, res: Response) {
  try {
    const result = await getProfile(req.user!.id);
    return res.json(result);
  } catch (error) {
    return res.status(404).json({ message: (error as Error).message });
  }
}
