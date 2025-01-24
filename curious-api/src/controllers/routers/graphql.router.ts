import express from 'express';
import { expressMiddleware } from '@apollo/server/express4';
import { server } from '@configurations/graphql.configuration';

export const graphqlRouter = express.Router();

graphqlRouter.use('/graphql', expressMiddleware(server));