import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/palette.route.js';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json())

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('🎨 Color Generator Backend Running');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
