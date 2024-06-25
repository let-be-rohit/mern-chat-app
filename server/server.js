import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import userRoutes from './routes/user.route.js';

import connectMongoDB from './db/connectMongoDB.js';
import {app, server} from './socket/socket.js'


const PORT = process.env.PORT || 4589;

dotenv.config();

app.use(express.json()); // to parse the incoming request with JSON payload ( from req.body )
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);


server.listen(PORT, () => {
    connectMongoDB();
    console.log(`Server is running on port ${PORT}`);
});