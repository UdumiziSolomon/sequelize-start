import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  database: "TaskManager",
  host: "localhost",
  username: "solonode",
  password: "postgres",
  dialect: "postgres",
  models: [__dirname + "/models"],
});

export default sequelize;
