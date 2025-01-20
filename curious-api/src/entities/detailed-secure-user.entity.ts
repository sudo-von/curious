import { DetailedUser } from './detailed-user.entity';

export type DetailedSecureUser = Omit<DetailedUser, 'password'>;