import express from "express";
import { router } from "./routes/router.js";
import cors from "cors";

const app = express();

app.use(express.json());
// app.use(cors);

// Set origin url env variable middleware
app.use((req, res, next) => {
  req.origin = process.env.ORIGIN_URL;
  req.apiKeyName = process.env.API_KEY_NAME;
  req.apiKeyValue = process.env.API_KEY_VALUE;
  next();
});

app.use(router);

export { app };
