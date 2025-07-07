import { GoogleGenerativeAI } from '@google/genai';
import 'dotenv/config';
const genAI = new genAI({
    apiKey: process.env.GENAI_API_KEY,

});
const model = genAI.model({ model: 'gemini-pro' });

export default model;
