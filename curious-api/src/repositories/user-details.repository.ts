import { DataTypes } from 'sequelize';
import { repository } from '../configurations/repository.configuration';
import { UserRepository } from './user.repository';

export const UserDetailsRepository = repository.define('UserDetails',
  {
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    biography: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    userId: {
      allowNull: false,
      references: {
        key: 'id',
        model: UserRepository,
      },
      type: DataTypes.UUID,
      unique: true,
    },
  },
  {
    underscored: true,
  }
);