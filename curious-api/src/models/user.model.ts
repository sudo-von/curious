export type User = {
  avatar: string;
  id: string;
  name: string;
  password: string;
  username: string;
};

export type CreateUser = Omit<User, 'avatar' | 'id'>;

export type UpdateUser = Pick<User, 'avatar' | 'name'>;