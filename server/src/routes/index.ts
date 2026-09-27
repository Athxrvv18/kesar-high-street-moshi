import { Router } from 'express';
import healthRoutes from './health.routes';
import leadRoutes from './lead.routes';

const router = Router();

router.use('/health', healthRoutes);
router.use('/leads', leadRoutes);

export default router;
