import { model, Schema, Model, Document } from "mongoose";
/**
 * Each unit is part of a company;
 */
interface ICompany extends Document {
  name: string;
}
const companySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
  },
  { collection: "companies" }
);

const CompanyModel: Model<ICompany> = model("companies", companySchema);

export { companySchema, CompanyModel, ICompany };
