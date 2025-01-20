import { UserDetailsRepository } from './user-details.repository';
import { UserMetricsRepository } from './user-metrics.repository';
import { UserRepository } from './user.repository';

UserDetailsRepository.belongsTo(UserRepository);
UserMetricsRepository.belongsTo(UserRepository);

UserRepository.hasOne(UserDetailsRepository);
UserRepository.hasOne(UserMetricsRepository);

export {
  UserDetailsRepository,
  UserMetricsRepository,
  UserRepository,
};