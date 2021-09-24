import { IAsset } from "../models/AssetModel";
import {
  ICreateAssetDTO,
  IAssetsRepository,
  IUpdateAssetDTO,
} from "../repositories/IAssetRepository";
import { IUnitsRepository } from "../repositories/IUnitRepository";

class AssetService {
  private statusAvailables = ["Running", "Alerting", "Stopped"];
  constructor(
    private assetsRepository: IAssetsRepository,
    private unitsRepository: IUnitsRepository
  ) {}
  async create({
    name,
    description,
    healthLevel,
    model,
    owner,
    status,
    unitId,
  }: ICreateAssetDTO): Promise<void> {
    const assetAlreadyExists = await this.assetsRepository.findByName(name);
    if (assetAlreadyExists && assetAlreadyExists.unitId === unitId) {
      throw new Error("Asset Already Exists!");
    }
    const unitIdExists = await this.unitsRepository.findById(unitId);
    if (!unitIdExists) {
      throw new Error("Invalid unit id");
    }
    if (!this.statusAvailables.includes(status)) {
      throw new Error(
        "Status must be one of this Running or Alerting or Stopped"
      );
    }
    if (healthLevel < 0 || healthLevel > 100) {
      throw new Error("healthLevel must be between 0 and 100");
    }
    this.assetsRepository.create({
      name,
      description,
      healthLevel,
      model,
      owner,
      status,
      unitId,
    });
  }
  list(): Promise<IAsset[]> {
    return this.assetsRepository.list();
  }
  listOne(id: string): Promise<IAsset | null> {
    return this.assetsRepository.findById(id);
  }
  async delete(id: string): Promise<void> {
    const assetAlreadyExists = await this.assetsRepository.findById(id);
    if (!assetAlreadyExists) {
      throw new Error("Asset dont Exists!");
    }
    await this.assetsRepository.delete(id);
  }
  async update({
    name,
    description,
    healthLevel,
    model,
    owner,
    status,
    unitId,
    id,
  }: IUpdateAssetDTO): Promise<void> {
    const userIdAlreadyExists = await this.assetsRepository.findById(id);
    if (!userIdAlreadyExists) {
      throw new Error("Asset dont Exists!");
    }
    const assetAlreadyExists = await this.assetsRepository.findByName(name);
    if (assetAlreadyExists && assetAlreadyExists.unitId === unitId) {
      throw new Error("Asset name already Exists!");
    }
    if (unitId) {
      const unitIdExists = await this.unitsRepository.findById(unitId);
      if (!unitIdExists) {
        throw new Error("Invalid unit id");
      }
    }
    if (status) {
      if (!this.statusAvailables.includes(status)) {
        throw new Error(
          "Status must be one of this Running or Alerting or Stopped"
        );
      }
    }
    if (healthLevel) {
      if (healthLevel < 0 || healthLevel > 100) {
        throw new Error("healthLevel must be between 0 and 100");
      }
    }
    await this.assetsRepository.update({
      name,
      description,
      healthLevel,
      model,
      owner,
      status,
      unitId,
      id,
    });
  }
}

export { AssetService };
