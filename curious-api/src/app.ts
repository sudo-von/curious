import express from 'express';
import { ENVIRONMENT_VARIABLES } from './config/environment-variables';

const app = express();
const { port } = ENVIRONMENT_VARIABLES;

app.get('/', (_req, res) => res.send({ message: 'Hello curious' }));

app.listen(port, () => console.log(`Listening at localhost:${port}`));