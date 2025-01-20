import { DetailedUser } from './detailed-user.model';

export type DetailedSecureUser = Omit<DetailedUser, 'password'>;