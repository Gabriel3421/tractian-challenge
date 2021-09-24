import { Response, Request } from "express";

import { CompanyService } from "../services/CompanyService";

class CompanyController {
  // eslint-disable-next-line prettier/prettier
  constructor(private companyService: CompanyService) { }
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name } = req.body;
      await this.companyService.create({ name });
      return res.status(201).send();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
  async list(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.companyService.list();
      return res.json(users);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
  async listOne(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const user = await this.companyService.listOne(id);
      return res.json(user);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name } = req.body;
    try {
      await this.companyService.update({ name, id });
      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await this.companyService.delete(id);
      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CompanyController };
