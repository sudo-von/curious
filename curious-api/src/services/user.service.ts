import { UserDetailsModel } from "@databases/models/user-details.model";
import { UserMetricsModel } from "@databases/models/user-metrics.model";
import { UserModel } from "@databases/models/user.model";
import { DetailedSecureUser } from "@entities/detailed-secure-user.entity";
import { userModelToDetailedSecureUser } from "@mappers/user.mappers";

class UserService {
  async getUserById(id: string): Promise<DetailedSecureUser | null> {
    const userModel = await UserModel.findByPk(id, {
      include: [
        { model: UserDetailsModel, as: 'details' },
        { model: UserMetricsModel, as: 'metrics' },
      ],
    });

    if (!userModel) return null;

    return userModelToDetailedSecureUser(userModel);
  };

  async getUserByUsername(username: string): Promise<DetailedSecureUser | null> {
    const userModel = await UserModel.findOne({
      include: [
        { model: UserDetailsModel, as: 'details' },
        { model: UserMetricsModel, as: 'metrics' },
      ],
      where: {
        username,
      },
    });

    if (!userModel) return null;

    return userModelToDetailedSecureUser(userModel);
  };
};

export {
  UserService as UserService,
};