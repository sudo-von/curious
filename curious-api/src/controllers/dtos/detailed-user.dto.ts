import { UserDto } from '@controllers/dtos/user.dto';
import { UserDetailsDto } from '@controllers/dtos/user-details.dto';
import { UserMetricsDto } from '@controllers/dtos/user-metrics.dto';

export type DetailedUserDto = UserDto & {
  details: UserDetailsDto;
  metrics: UserMetricsDto;
};