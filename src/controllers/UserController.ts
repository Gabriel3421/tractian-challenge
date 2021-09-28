import { Response, Request } from "express";

import { UserService } from "../services/UserService";

class UserController {
  // eslint-disable-next-line prettier/prettier
  constructor(private userService: UserService) { }
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, companyId } = req.body;
      await this.userService.create({ name, companyId });
      return res.status(201).send();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
  async list(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.userService.list();
      return res.json(users);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
  async listOne(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const user = await this.userService.listOne(id);
      return res.json(user);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
  async login(req: Request, res: Response): Promise<Response> {
    try {
      const { name, companyId } = req.query;
      if (!name || !companyId) {
        throw new Error("Invalid parameters");
      }

      const user = await this.userService.login(
        String(name),
        String(companyId)
      );
      return res.json(user);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, companyId } = req.body;
    try {
      await this.userService.update({ name, companyId, id });
      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await this.userService.delete(id);
      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { UserController };
