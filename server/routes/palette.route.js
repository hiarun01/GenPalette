// import express from 'express';
import { Router } from 'express';
import { generatePalette } from '../controllers/palettecontroller.js';

const router = Router()
router.post('/generate', generatePalette);

export default router;






