import express from "express";
import config from "config";
import connectDB from "./utils/connect";
import log from "./utils/logger";
import routes from "./routes";

const PORT = config.get<number>("PORT");

const app = express();

app.listen(PORT, async function () {
  log.info(`Server is running on http://localhost:${PORT}`);

  await connectDB();
  routes(app);
});
