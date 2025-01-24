import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import { sequelize } from '@configurations/repository.configuration';
import { UserModel } from './user.model';

type UserDetailsModelAttributes = InferAttributes<UserDetailsModel>;
type UserDetailsModelCreationalAttributes = InferCreationAttributes<UserDetailsModel>;

class UserDetailsModel extends Model<UserDetailsModelAttributes, UserDetailsModelCreationalAttributes> {
  declare createdAt: CreationOptional<Date>;
  declare biography: string;
  declare id: CreationOptional<string>;
  declare updatedAt: CreationOptional<Date>;
  declare userId: ForeignKey<UserModel['id']>;
};

UserDetailsModel.init(
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
    createdAt: {
      type: DataTypes.DATE,
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
  },
  {
    tableName: 'UserDetails',
    sequelize,
  },
);

export {
  UserDetailsModelAttributes,
  UserDetailsModelCreationalAttributes,
  UserDetailsModel,
};