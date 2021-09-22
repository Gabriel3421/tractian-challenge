import { model, Schema, Model, Document } from "mongoose";
/**
 * Each unit is part of a company;
 */
interface IUnit extends Document {
  name: string;
  companyId: string;
}
const unitSchema: Schema = new Schema(
  {
    companyId: { type: String, required: true },
    name: { type: String, required: true },
  },
  { collection: "units" }
);

const UnitModel: Model<IUnit> = model("units", unitSchema);

export { unitSchema, UnitModel, IUnit };
