import { Router } from "express";

import { userController } from "../controllers";

const usersRoutes = Router();
usersRoutes.get("/", async (req, res) => {
  return userController.list(req, res);
});

usersRoutes.get("/login", async (req, res) => {
  return userController.login(req, res);
});

usersRoutes.get("/:id", async (req, res) => {
  return userController.listOne(req, res);
});

usersRoutes.post("/", async (req, res) => {
  return userController.create(req, res);
});

usersRoutes.put("/:id", async (req, res) => {
  return userController.update(req, res);
});

usersRoutes.delete("/:id", async (req, res) => {
  return userController.delete(req, res);
});

export { usersRoutes };
