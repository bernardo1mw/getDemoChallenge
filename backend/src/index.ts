import express from 'express';
import demoRoutes from './routes/demoRoutes';
import frameRoutes from './routes/frameRoutes';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', demoRoutes);
app.use('/api', frameRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
