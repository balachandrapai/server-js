import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchema } from '@graphql-tools/load';
export * from './generated/schema';

export const getTypeDefs = async () => {
  return loadSchema(`${__dirname}/**/*.graphql`, {
    loaders: [new GraphQLFileLoader()],
  });
};
