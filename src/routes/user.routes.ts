import { Router } from "express";

import { UsersRepository } from "../repositories/implementations/UsersRepository";

const usersRoutes = Router();
const usersRepository = new UsersRepository();

usersRoutes.get("/", async (req, res) => {
  const docs = await usersRepository.list();
  return res.json(docs);
});

usersRoutes.get("/:id", async (req, res) => {
  const { id } = req.params;
  const docs = await usersRepository.findById(id);
  return res.json(docs);
});

usersRoutes.post("/", async (req, res) => {
  const { name, companyId } = req.body;
  try {
    const user = await usersRepository.create({ name, companyId });
    return res.json(user);
  } catch (err) {
    return res.status(400).json({ err });
  }
});

usersRoutes.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, companyId } = req.body;
  try {
    await usersRepository.update({ name, companyId, id });
    return res.status(204).send();
  } catch (err) {
    return res.status(400).json({ err });
  }
});

usersRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await usersRepository.delete(id);
  return res.status(204).send();
});

export { usersRoutes };
