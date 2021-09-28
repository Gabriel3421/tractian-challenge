import cors from "cors";
import express from "express";

import "./config/mongoConfig";
import logs from "./middleware/logs";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(logs);
app.use(cors());
app.use(router);

const port = 3333;

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
