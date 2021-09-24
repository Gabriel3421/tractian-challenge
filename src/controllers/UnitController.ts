import { Response, Request } from "express";

import { UnitService } from "../services/UnitService";

class UnitController {
  // eslint-disable-next-line prettier/prettier
  constructor(private unitService: UnitService) { }
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, companyId } = req.body;
      await this.unitService.create({ name, companyId });
      return res.status(201).send();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
  async list(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.unitService.list();
      return res.json(users);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
  async listOne(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const user = await this.unitService.listOne(id);
      return res.json(user);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, companyId } = req.body;
    try {
      await this.unitService.update({ name, companyId, id });
      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await this.unitService.delete(id);
      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { UnitController };
