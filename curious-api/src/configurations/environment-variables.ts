import dotenv from 'dotenv';

dotenv.config();

export const ENVIRONMENT_VARIABLES = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || '3000',
};