import { Table, Column, DataType, Model } from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "task",
  modelName: "Task",
})
export class Task extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;
}
