import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./lib/db.js";
import todoOps from "./router/todoOps.js";
import errorHandler from "./middleware/error.js";

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

connectDb();
app.use(cors());

app.use(express.json());

app.use(errorHandler);

app.use("/api/todos", todoOps);

app.listen(port, () => {
  console.log("Server in running on ", port);
});
