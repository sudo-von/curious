import { UserDetailsModel } from './user-details.model';
import { UserMetricsModel } from './user-metrics.model';
import { UserModel } from './user.model';

UserDetailsModel.belongsTo(UserModel, {
  foreignKey: 'userId', as: 'user',
});
UserMetricsModel.belongsTo(UserModel, {
  foreignKey: 'userId', as: 'user',
});

UserModel.hasOne(UserDetailsModel, {
  foreignKey: 'userId', as: 'details',
});
UserModel.hasOne(UserMetricsModel, {
  foreignKey: 'userId', as: 'metrics',
});

export {
  UserDetailsModel,
  UserMetricsModel,
  UserModel,
};