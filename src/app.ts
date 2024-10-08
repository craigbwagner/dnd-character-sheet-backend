import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import verifyToken from './middleware/verifyToken';

import usersRouter from './routes/users';
import charactersRouter from './routes/characters';
import monstersRouter from './routes/monsters'

const app = express();
dotenv.config();

if (!process.env.MONGO_URI) {
  throw new Error('MONGO_URI environment variable is not defined.');
}

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}`);
});

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));   ;

app.use("/users", usersRouter);

app.use(verifyToken);

app.use("/characters", charactersRouter);
app.use("/monsters", monstersRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
