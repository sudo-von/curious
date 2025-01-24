import { DetailedUser } from '@entities/detailed-user.entity';

export type SecureUser = Omit<DetailedUser, 'password'>;