import { Router } from "express";

import { companyController } from "../controllers";

const companyRoutes = Router();

companyRoutes.get("/", async (req, res) => {
  return companyController.list(req, res);
});

companyRoutes.get("/:id", async (req, res) => {
  return companyController.listOne(req, res);
});

companyRoutes.post("/", async (req, res) => {
  return companyController.create(req, res);
});

companyRoutes.put("/:id", async (req, res) => {
  return companyController.update(req, res);
});

companyRoutes.delete("/:id", async (req, res) => {
  return companyController.delete(req, res);
});

export { companyRoutes };
