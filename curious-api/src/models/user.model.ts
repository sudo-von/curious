export type User = {
  id: string;
  name: string;
  password: string;
  username: string;
};

export type CreateUser = Omit<User, 'id'>;

export type UpdateUser = Omit<User, 'id'>;

export type SecureUser = Omit<User, 'password'>;