import { Sequelize } from 'sequelize';
import path from 'path';

const storage = path.join(process.cwd(), 'data', 'database.sqlite');

export const database = new Sequelize({
  dialect: 'sqlite',
  storage,
});