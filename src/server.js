import 'dotenv/config';
import express from 'express';

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';

const app = express();

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port 3000');
})
