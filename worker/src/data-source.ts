// data-source.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_URL);

export const AppDataSource = sequelize;
