import express from 'express';
import { getDemos } from '../controllers/demoController';

const router = express.Router();

router.get('/demos', getDemos);

export default router;
