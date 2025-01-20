import { DataTypes } from 'sequelize';
import { repository } from '../configurations/repository.configuration';

export const UserRepository = repository.define('User',
  {
    avatar: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    underscored: true,
  }
);