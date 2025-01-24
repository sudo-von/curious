export type UserDto = {
  avatar: string;
  id: string;
  name: string;
  username: string;
};

export type CreateUserDto = Omit<UserDto, 'avatar' | 'id'>;

export type UpdateUserDto = Omit<UserDto, 'avatar' | 'id'>;