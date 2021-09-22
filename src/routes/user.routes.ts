import { Router } from "express";

import { UserController } from "../controllers/UserController";
import { UsersRepository } from "../repositories/implementations/UsersRepository";
import { UserService } from "../services/UserService";

const usersRoutes = Router();
const usersRepository = new UsersRepository();
const createUserService = new UserService(usersRepository);
const createUserController = new UserController(createUserService);

usersRoutes.get("/", async (req, res) => {
  return createUserController.list(req, res);
});

usersRoutes.get("/:id", async (req, res) => {
  return createUserController.listOne(req, res);
});

usersRoutes.post("/", async (req, res) => {
  return createUserController.create(req, res);
});

usersRoutes.put("/:id", async (req, res) => {
  return createUserController.update(req, res);
});

usersRoutes.delete("/:id", async (req, res) => {
  return createUserController.delete(req, res);
});

export { usersRoutes };
