import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import { connectDB } from './lib/db.js';
import { app, server } from './lib/socket.js';

app.use(express.json()); // req.body
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
  connectDB();
})
