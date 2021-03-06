import { model, Schema, Model, Document } from "mongoose";
/**
 *  Each asset must have an image, name, description, model, owner, status and health level;
 *  There are three types of status: Running, Alerting, Stopped;
 *  Health level needs to be between 0% to 100%.
 *  Each asset is part of a unit;
 */

interface IAsset extends Document {
  name: string;
  description: string;
  unitId: string;
  model: string;
  owner: string;
  status: string;
  healthLevel: number;
}

const assetSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    unitId: { type: String, required: true },
    model: { type: String, required: true },
    owner: { type: String, required: true },
    status: { type: String, required: true },
    healthLevel: { type: Number, required: true },
  },
  { collection: "assets" }
);

const AssetModel: Model<IAsset> = model("assets", assetSchema);

export { assetSchema, AssetModel, IAsset };
