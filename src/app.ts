import express from "express";
import sequelize from "./database";
import taskRoutes from "./routes/taskRoutes";
import "reflect-metadata";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(taskRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});
