import { app } from "./server";

const port: number = parseInt(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
