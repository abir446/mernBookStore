import express from "express";
import { PORT, MongoDBURL } from "./config.js";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Learning MERN");
});

app.use("/books", bookRoute);

mongoose
  .connect(MongoDBURL)
  .then(() => {
    console.log("Database connection Success");
    app.listen(PORT, () => {
      console.log(`App is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
