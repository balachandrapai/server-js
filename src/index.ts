import express from 'express';

const PORT = 8000;

const runApp = async () => {
  const app = express();

  app.listen(PORT, () => {
    console.log(`Running at http://localhost:${PORT}`);
  });

  app.get('/', (req, res) => {
    res.send('Hello world!!!')
  })

};

runApp().catch((error) => console.log(error));
