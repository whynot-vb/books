import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import "express-async-errors";
import express from "express";
const app = express();

import morgan from "morgan";
dotenv.config();

//route
import bookRouter from "./routes/bookRouter.js";

//middleware
import notFoundError from "./middleware/notFoundError.js";
import errorHandler from "./middleware/handleError.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());

app.use("/api/v1/books", bookRouter);
app.use(notFoundError);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const mongooseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

mongooseConnection();
