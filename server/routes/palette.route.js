// import express from 'express';
import {Router} from "express";
import {GeneratePalette} from "../controllers/palettecontroller.js";

const router = Router();
router.post("/generate", GeneratePalette);

export default router;
