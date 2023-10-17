import express from 'express';

import cors from 'cors';
import dotenv from 'dotenv';
import * as models from './models/models.js';

import sequelize from './db.js';
import { router } from './router.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  }),
);

app.use('/', router);

const start = async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({ force: true });

    app.listen(PORT, () => console.log('Запущен на ', PORT));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

start();
