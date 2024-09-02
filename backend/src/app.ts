import express from 'express';
import issueRoutes from './routes/issueRoutes';


const app = express();

app.use(express.json());
app.use('/api', issueRoutes);  // Register the issue routes under /api

export default app;
