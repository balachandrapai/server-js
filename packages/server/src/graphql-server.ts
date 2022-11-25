import { createServer } from '@graphql-yoga/node';
import { Express } from 'express';

import { makeExecutableSchema } from '@graphql-tools/schema';
import { getTypeDefs } from '@server-js/schema';

import { resolvers } from './resolvers';

export const initializeGraphQLServer = async (app: Express) => {
    const typeDefs = await getTypeDefs();
    const schema = makeExecutableSchema({ typeDefs, resolvers });

    const server = createServer({
      schema: schema,
      maskedErrors: false,
      logging: false,
    });
  
    app.use('/graphql', server);

    console.log(`GraphQL Server started at ${server.getAddressInfo().endpoint}`);
  };
