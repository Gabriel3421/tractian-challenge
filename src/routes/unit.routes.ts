import { Router } from "express";

import { unitController } from "../controllers";

const unitRoutes = Router();

unitRoutes.get("/", async (req, res) => {
  return unitController.list(req, res);
});

unitRoutes.get("/:id", async (req, res) => {
  return unitController.listOne(req, res);
});

unitRoutes.post("/", async (req, res) => {
  return unitController.create(req, res);
});

unitRoutes.put("/:id", async (req, res) => {
  return unitController.update(req, res);
});

unitRoutes.delete("/:id", async (req, res) => {
  return unitController.delete(req, res);
});

export { unitRoutes };
