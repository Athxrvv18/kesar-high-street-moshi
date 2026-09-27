import { Router, Request, Response } from 'express';
import { getDbStatus } from '../config/db';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Kesar High Street API is healthy and operational',
    data: {
      status: 'UP',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      database: getDbStatus() ? 'CONNECTED' : 'STANDBY_FALLBACK',
    },
  });
});

export default router;
