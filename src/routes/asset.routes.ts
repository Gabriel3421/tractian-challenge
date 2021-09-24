import { Router } from "express";

import { assetController } from "../controllers";

const assetRoutes = Router();

assetRoutes.get("/", async (req, res) => {
  return assetController.list(req, res);
});

assetRoutes.get("/:id", async (req, res) => {
  return assetController.listOne(req, res);
});

assetRoutes.post("/", async (req, res) => {
  return assetController.create(req, res);
});

assetRoutes.put("/:id", async (req, res) => {
  return assetController.update(req, res);
});

assetRoutes.delete("/:id", async (req, res) => {
  return assetController.delete(req, res);
});

export { assetRoutes };
