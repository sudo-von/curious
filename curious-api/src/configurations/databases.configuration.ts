import path from 'path';
import { Sequelize } from 'sequelize';

const storage = path.join(process.cwd(), 'data', 'database.sqlite');

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage,
});