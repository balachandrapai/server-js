import express from 'express';
import { initializeGraphQLServer } from './graphql-server';

const PORT = 8000;

const runApp = async () => {
  const app = express();

  app.listen(PORT, () => {
    console.log(`Running at http://localhost:${PORT}`);
  });

  app.get('/', (req, res) => {
    res.send('Hello world!!!')
  })

  // Start the GraphQL server
  await initializeGraphQLServer(app);

};

runApp().catch((error) => console.log(error));
