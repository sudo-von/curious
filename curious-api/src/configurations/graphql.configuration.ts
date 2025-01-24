import path from 'path';
import { ApolloServer } from '@apollo/server';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { getUserByUsername, getUserById } from '@libraries/graphql/resolvers/queries/user.query';

const typePath = path.join(__dirname, '..', 'libraries', 'graphql', 'schemas');
const typeSources = loadFilesSync(typePath, { recursive: true });

const typeDefs = mergeTypeDefs(typeSources);

export const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      getUserByUsername,
      getUserById,
    },
  },
});