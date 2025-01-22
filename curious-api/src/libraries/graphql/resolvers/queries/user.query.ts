import { UserDto } from "../../../../controllers/dtos/user.dto"
import { UserDetailsModel } from "../../../../databases/models/user-details.model";
import { UserMetricsModel } from "../../../../databases/models/user-metrics.model";
import { UserModel } from "../../../../databases/models/user.model"

export const getUserById = async (_context: object, { id }: { id: string }): Promise<UserDto | null> => {
  const user = await UserModel.findByPk(id, {
    include: [
      {
        model: UserDetailsModel,
        as: 'details',
      },
      {
        model: UserMetricsModel,
        as: 'metrics'
      }
    ]
  });

  if (!user) return null;

  const userDto: UserDto = {
    avatar: user.avatar,
    details: user.details && {
      biography: user.details?.biography,
    },
    id: user.id,
    metrics: user.metrics && {
      answers: user.metrics?.answers,
      questions: user.metrics?.questions,
      views: user.metrics?.views,
    },
    name: user.name,
    username: user.username,
  }

  return userDto;
}

export const getUserByUsername = async (_context: object, { username }: { username: string }): Promise<UserDto | null> => {
  const user = await UserModel.findOne({
    where: {
      username,
    },
    include: [
      {
        model: UserDetailsModel,
        as: 'details',
      },
      {
        model: UserMetricsModel,
        as: 'metrics'
      },
    ]
  });

  if (!user) return null;

  const userDto: UserDto = {
    avatar: user.avatar,
    details: user.details && {
      biography: user.details?.biography,
    },
    id: user.id,
    metrics: user.metrics && {
      answers: user.metrics?.answers,
      questions: user.metrics?.questions,
      views: user.metrics?.views,
    },
    name: user.name,
    username: user.username,
  }

  return userDto;
}