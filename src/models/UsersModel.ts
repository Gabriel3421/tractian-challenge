import { model, Schema, Model, Document } from "mongoose";
/**
 * Each unit is part of a company;
 */
interface IUser extends Document {
  name: string;
  companyId: string;
}
const usersSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    companyId: { type: String, required: true },
  },
  { collection: "users" }
);

const UsersModel: Model<IUser> = model("users", usersSchema);

export { usersSchema, UsersModel, IUser };
