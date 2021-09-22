import express from "express";

import "./config/mongoConfig";
import { router } from "./routes";

const app = express();
app.use(express.json());

app.use(router);

app.listen(3333, () => {
  console.log("server running");
});
