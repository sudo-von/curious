import { ENVIRONMENT_VARIABLES } from './configurations/environment-variables.configuration';
import { sequelize } from './configurations/repository.configuration';
import './databases/models/associations.repository';
import { server } from './configurations/graphql.configuration';
import { app } from './configurations/express.configuration';
import { expressMiddleware } from '@apollo/server/express4';

const { port } = ENVIRONMENT_VARIABLES;

const bootstrap = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    await server.start();

    app.use('/graphql', expressMiddleware(server));
    app.listen(port, () => console.log(`📡 Listening at localhost:${port}`));
  } catch (error) {
    console.error('❌ Oops! Bootstrap process failed.', error);
    process.exit(1);
  }
};

bootstrap();