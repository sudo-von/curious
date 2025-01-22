import cors from 'cors';
import express from 'express';
import { expressMiddleware } from '@apollo/server/express4';
import { server } from './graphql.configuration';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/graphql', expressMiddleware(server));

export { app };