import express from 'express';
import { getFramesByDemo, updateFrame } from '../controllers/frameController';

const router = express.Router();

router.get('/demos/:id/frames', getFramesByDemo);
router.put('/frames/:id', updateFrame);

export default router;
