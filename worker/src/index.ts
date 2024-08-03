// src/index.ts
import dotenv from 'dotenv';

import { AppDataSource } from './data-source';
import { Log } from './functions/Log';

dotenv.config();

AppDataSource.authenticate().then(async () => {
  Log('connected to database', 'info');
});
