import { IAsset } from "../models/AssetModel";

interface ICreateAssetDTO {
  name: string;
  description: string;
  unitId: string;
  model: string;
  owner: string;
  status: string;
  healthLevel: number;
}
interface IUpdateAssetDTO {
  name: string;
  description: string;
  unitId: string;
  model: string;
  owner: string;
  status: string;
  healthLevel: number;
  id: string;
}

interface IAssetsRepository {
  findById(id: string): Promise<IAsset | null>;
  findByName(name: string): Promise<IAsset | null>;
  list(): Promise<IAsset[]>;
  create({
    name,
    description,
    healthLevel,
    model,
    owner,
    status,
    unitId,
  }: ICreateAssetDTO): Promise<IAsset>;
  update({
    name,
    description,
    healthLevel,
    model,
    owner,
    status,
    unitId,
  }: IUpdateAssetDTO): void;
  delete(id: string): void;
}

export { IAssetsRepository, ICreateAssetDTO, IUpdateAssetDTO };
