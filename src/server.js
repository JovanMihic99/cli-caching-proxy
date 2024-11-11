import express from "express";
import { router } from "./routes/router.js";

const app = express();

app.use(express.json());

// Set origin url env variable middleware
app.use((req, res, next) => {
  req.origin = process.env.ORIGIN_URL;
  next();
});

app.use(router);

export { app };
