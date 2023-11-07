import { Sequelize } from "sequelize";
import { UserModel } from "../models/user.js";

export const connection = async () => {
  const sequelize = new Sequelize("studentpanel", "postgres", "soab42", {
    host: "localhost",
    port: 5000, // Default PostgreSQL port
    dialect: "postgres",
  });
  let User = null;
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    User = UserModel(sequelize);

    await sequelize.sync();
    // console.log("table created succesfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  return { User };
};
