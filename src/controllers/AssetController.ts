import { Response, Request } from "express";

import { AssetService } from "../services/AssetService";

class AssetController {
  // eslint-disable-next-line prettier/prettier
  constructor(private assetService: AssetService) { }
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const {
        name,
        description,
        email,
        healthLevel,
        model,
        owner,
        status,
        unitId,
      } = req.body;
      await this.assetService.create({
        name,
        description,
        email,
        healthLevel,
        model,
        owner,
        status,
        unitId,
      });
      return res.status(201).send();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
  async list(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.assetService.list();
      return res.json(users);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
  async listOne(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const user = await this.assetService.listOne(id);
      return res.json(user);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const {
      name,
      description,
      email,
      healthLevel,
      model,
      owner,
      status,
      unitId,
    } = req.body;
    try {
      await this.assetService.update({
        name,
        description,
        email,
        healthLevel,
        model,
        owner,
        status,
        unitId,
        id,
      });
      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await this.assetService.delete(id);
      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { AssetController };
