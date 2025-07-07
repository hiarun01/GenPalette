// import express from 'express';
import { Router } from 'express';
import { codeReview } from '../controllers/palettecontroller.js';

const router = Router()
router.post('/generate', codeReview);

export default router;






