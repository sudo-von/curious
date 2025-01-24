import { UserDto } from "@controllers/dtos/user.dto"
import { detailedSecureUserToUserDto } from "@mappers/user.mappers";
import { UserService } from "src/services/user.service";

type GetUserByIdQueryArgs = {
  id: string;
};

type GetUserByUsernameQueryArgs = {
  username: string;
};

type GetUserByIdQuery = (context: object, args: GetUserByIdQueryArgs) => Promise<UserDto | null>;
type GetUserByUsernameQuery = (context: object, args: GetUserByUsernameQueryArgs) => Promise<UserDto | null>;

export const getUserById: GetUserByIdQuery = async (_context, args) => {
  try {
    const { id } = args;

    const userService = new UserService();

    const detailedSecureUser = await userService.getUserById(id);
    if (!detailedSecureUser) return null;

    return detailedSecureUserToUserDto(detailedSecureUser);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getUserByUsername: GetUserByUsernameQuery = async (_context, args) => {
  try {
    const { username } = args;

    const userService = new UserService();

    const detailedSecureUser = await userService.getUserByUsername(username);
    if (!detailedSecureUser) return null;

    return detailedSecureUserToUserDto(detailedSecureUser);
  } catch (e) {
    console.error(e);
    throw e;
  }
};