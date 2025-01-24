import { User } from '@entities/user.entity';
import { UserDetails } from '@entities/user-details.entity';
import { UserMetrics } from '@entities/user-metrics.entity';

export type DetailedUser = User & {
  details: UserDetails;
  metrics: UserMetrics;
};