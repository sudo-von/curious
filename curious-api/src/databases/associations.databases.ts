import { UserDetailsModel } from '@databases/models/user-details.model';
import { UserMetricsModel } from '@databases/models/user-metrics.model';
import { UserModel } from '@databases/models/user.model';

UserDetailsModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'user' });
UserMetricsModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'user' });

UserModel.hasOne(UserDetailsModel, { foreignKey: 'userId', as: 'details' });
UserModel.hasOne(UserMetricsModel, { foreignKey: 'userId', as: 'metrics' });