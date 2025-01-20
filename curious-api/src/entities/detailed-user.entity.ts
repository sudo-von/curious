import { UpdateUser, User } from './user.entity';
import { UpdateUserDetails, UserDetails } from './user-details.entity';
import { UserMetrics } from './user-metrics.entity';

export type DetailedUser = User & {
  details: UserDetails;
  metrics: UserMetrics;
};

export type UpdateDetailedUser = UpdateUser & {
  details: UpdateUserDetails;
};