import { Router } from 'express';
import { createLead, getLeads } from '../controllers/leadController';

const router = Router();

// POST /api/leads - Create new lead / site visit booking
router.post('/', createLead);

// GET /api/leads - Retrieve recent leads (administrative)
router.get('/', getLeads);

export default router;
