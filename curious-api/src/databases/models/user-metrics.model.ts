import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import { sequelize } from '../../configurations/repository.configuration';
import { UserModel } from './user.model';

type UserMetricsModelAttributes = InferAttributes<UserMetricsModel>;
type UserMetricsModelCreationalAttributes = InferCreationAttributes<UserMetricsModel>;

class UserMetricsModel extends Model<UserMetricsModelAttributes, UserMetricsModelCreationalAttributes> {
  declare answers: number;
  declare createdAt: CreationOptional<Date>;
  declare id: CreationOptional<string>;
  declare questions: number;
  declare updatedAt: CreationOptional<Date>;
  declare userId: ForeignKey<UserModel['id']>;
  declare views: number;
};

UserMetricsModel.init(
  {
    answers: {
      allowNull: false,
      type: DataTypes.NUMBER,
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
    questions: {
      allowNull: false,
      type: DataTypes.NUMBER,
    },
    userId: {
      allowNull: false,
      references: {
        key: 'id',
        model: UserModel,
      },
      type: DataTypes.UUID,
      unique: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    views: {
      allowNull: false,
      type: DataTypes.NUMBER,
    },
  },
  {
    tableName: 'UserMetrics',
    sequelize,
  },
);

export {
  UserMetricsModelAttributes,
  UserMetricsModelCreationalAttributes,
  UserMetricsModel,
};