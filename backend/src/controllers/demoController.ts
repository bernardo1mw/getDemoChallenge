import { Request, Response } from 'express';
import conn from '../config/database';
import { Demo } from '../models/demo';

export const getDemos = async (req: Request, res: Response) => {
  try {
    const result = await conn.query('SELECT * FROM demos');
    
    const demos: Demo[] = result;
    res.send(demos);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
