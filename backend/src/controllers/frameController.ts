import { Request, Response } from 'express';
import conn from '../config/database';
import { Frame } from '../models/frame';

export const getFramesByDemo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await conn.query('SELECT * FROM frames WHERE demo_id = $1', [id]);
    const frames: Frame[] = result;
    res.send(frames);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateFrame = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { frame_html } = req.body;
  try {
    await conn.query('UPDATE frames SET frame_html = $1 WHERE id = $2', [frame_html, id]);
    res.status(200).send({ message: 'Frame updated successfully' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
