import { ENVIRONMENT_VARIABLES } from '@configurations/environment-variables.configuration';
import { sequelize } from '@configurations/repository.configuration';
import '@databases/models/associations.repository';
import { server } from '@configurations/graphql.configuration';
import { app } from '@configurations/express.configuration';
import { expressMiddleware } from '@apollo/server/express4';
import { UserMetricsModel, UserModel } from '@databases/models/associations.repository';

const { port } = ENVIRONMENT_VARIABLES;

const bootstrap = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    await server.start();

    await UserModel.create({
      "avatar": "https://randomuser.me/api/portraits/men/32.jpg",
      "id": "67cb380e-b2e6-4161-a57e-4882271f8acf",
      "name": "VoN",
      "password": "P@ssw0rd123",
      "username": "von"
    });

    await UserMetricsModel.create({
      answers: 0,
      questions: 0,
      userId: "67cb380e-b2e6-4161-a57e-4882271f8acf",
      views: 0,
    });

    app.use('/graphql', expressMiddleware(server));
    app.listen(port, () => console.log(`📡 Listening at localhost:${port}`));
  } catch (error) {
    console.error('❌ Oops! Bootstrap process failed.', error);
    process.exit(1);
  }
};

bootstrap();