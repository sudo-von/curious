import { UpdateUser, User } from './user.model';
import { UpdateUserDetails, UserDetails } from './user-details.model';

export type DetailedUser = User & {
  details: UserDetails;
};

export type UpdateDetailedUser = UpdateUser & {
  details: UpdateUserDetails;
};