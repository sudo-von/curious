import { UserDto } from "@controllers/dtos/user.dto";
import { UserModel } from "@databases/models/user.model";
import { SecureUser } from "@entities/secure-user.entity";

const detailedSecureUserToUserDto = (detailedSecureUser: SecureUser): UserDto => ({
  avatar: detailedSecureUser.avatar,
  details: detailedSecureUser.details && {
    biography: detailedSecureUser.details.biography,
  },
  id: detailedSecureUser.id,
  metrics: detailedSecureUser.metrics && {
    answers: detailedSecureUser.metrics.answers,
    questions: detailedSecureUser.metrics.questions,
    views: detailedSecureUser.metrics.views,
  },
  name: detailedSecureUser.name,
  username: detailedSecureUser.username,
});

const userModelToDetailedSecureUser = (userModel: UserModel): SecureUser => ({
  avatar: userModel.avatar,
  details: userModel.details && {
    biography: userModel.details.biography,
  },
  id: userModel.id,
  metrics: userModel.metrics && {
    answers: userModel.metrics.answers,
    questions: userModel.metrics.questions,
    views: userModel.metrics.views,
  },
  name: userModel.name,
  username: userModel.username,
});

export {
  userModelToDetailedSecureUser,
  detailedSecureUserToUserDto,
};