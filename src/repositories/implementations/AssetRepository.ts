import { IAsset, AssetModel } from "../../models/AssetModel";
import {
  ICreateAssetDTO,
  IUpdateAssetDTO,
  IAssetsRepository,
} from "../IAssetRepository";

class AssetsRepository implements IAssetsRepository {
  async create({
    name,
    description,
    healthLevel,
    model,
    owner,
    status,
    unitId,
  }: ICreateAssetDTO): Promise<IAsset> {
    const user = new AssetModel({
      name,
      description,
      healthLevel,
      model,
      owner,
      status,
      unitId,
    });
    await user.save();
    return user;
  }
  list(): Promise<IAsset[]> {
    return AssetModel.find({}).exec();
  }
  async findById(id: string): Promise<IAsset | null> {
    const user = await AssetModel.findOne({ _id: id }).exec();
    if (user) {
      return user;
    }
    return null;
  }
  async findByName(name: string): Promise<IAsset | null> {
    const user = await AssetModel.findOne({ name }).exec();
    if (user) {
      return user;
    }
    return null;
  }
  async delete(id: string): Promise<void> {
    await AssetModel.deleteOne({ _id: id }).lean().exec();
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
    await AssetModel.updateOne(
      { _id: id },
      {
        name,
        description,
        healthLevel,
        model,
        owner,
        status,
        unitId,
      }
    );
  }
}

export { AssetsRepository };
