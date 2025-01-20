import express from 'express';

const app = express();
const port = 3000;

app.get('/', (_req, res) => res.send({ message: 'Hello curious' }));

app.listen(port, () => console.log(`Listening at localhost:${port}`));