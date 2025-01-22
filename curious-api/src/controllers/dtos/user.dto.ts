import { UserDetailsDto } from "./user-details.dto";
import { UserMetricsDto } from "./user-metrics.dto";

export type UserDto = {
  avatar: string;
  details: UserDetailsDto;
  id: string;
  metrics: UserMetricsDto;
  name: string;
  username: string;
};