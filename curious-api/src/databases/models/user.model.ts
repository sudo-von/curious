import {
  Association,
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
} from 'sequelize';
import { UserDetailsModel } from './user-details.model';
import { UserMetricsModel } from './user-metrics.model';
import { sequelize } from '../../configurations/repository.configuration';

type UserModelAttributes = InferAttributes<UserModel, UserModelOmittedAttributes>;
type UserModelCreationalAttributes = InferCreationAttributes<UserModel, UserModelOmittedAttributes>;
type UserModelOmittedAttributes = { omit: 'details' | 'metrics' };

class UserModel extends Model<UserModelAttributes, UserModelCreationalAttributes> {
  declare avatar: string;
  declare createdAt: CreationOptional<Date>;
  declare details?: NonAttribute<UserDetailsModel>;
  declare id: CreationOptional<string>;
  declare metrics?: NonAttribute<UserMetricsModel>;
  declare name: string;
  declare password: string;
  declare updatedAt: CreationOptional<Date>;
  declare username: string;

  declare static associations: {
    details: Association<UserModel, UserDetailsModel>;
    metrics: Association<UserModel, UserMetricsModel>;
  };
};

UserModel.init(
  {
    avatar: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
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
    updatedAt: {
      type: DataTypes.DATE,
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    tableName: 'users',
    sequelize,
  },
);

export {
  UserModelAttributes,
  UserModelCreationalAttributes,
  UserModel,
};