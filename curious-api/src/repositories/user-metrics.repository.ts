import { DataTypes } from 'sequelize';
import { repository } from '../configurations/repository.configuration';
import { UserRepository } from './user.repository';

export const UserMetricsRepository = repository.define('UserMetrics',
  {
    answers: {
      allowNull: false,
      type: DataTypes.NUMBER,
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
        model: UserRepository,
      },
      type: DataTypes.UUID,
      unique: true,
    },
    views: {
      allowNull: false,
      type: DataTypes.NUMBER,
    },
  },
  {
    underscored: true,
  }
);