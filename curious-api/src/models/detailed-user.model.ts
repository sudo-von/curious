import { UpdateUser, User } from './user.model';
import { UpdateUserDetails, UserDetails } from './user-details.model';
import { UserMetrics } from './user-metrics.model';

export type DetailedUser = User & {
  details: UserDetails;
  metrics: UserMetrics;
};

export type UpdateDetailedUser = UpdateUser & {
  details: UpdateUserDetails;
};