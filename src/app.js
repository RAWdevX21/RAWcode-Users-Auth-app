import cors from "cors";
import consola from "consola"; // useful for logging whatever we need
import express from "express";
import mongoose from "mongoose"; //connect with the database
import { json } from "body-parser";

// Import Application Constants
import { DB, PORT } from "./constants/config.js";

// Initialize express application
const app = express();

// Apply application middlewares
app.use(cors());
app.use(json());

//takes time for db to connect so make async and await the connect
const runApp = async () => {
  //in case of an error with starting up server
  try {
    // Connect with the database
    await mongoose.connect(DB, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });

      // when it connects to DB then "Success" message
      consola.success("DATABASE CONNECTED...");

      // Start application listening for request on server
      // once we pass the PORT, it will give a callback
      app.listen(PORT, () => consola.success(`Server started on port ${PORT}`));
   } catch (err) {
      consola.error(`Unable to start the server \n${err.message}`);
   }
};

runApp();
