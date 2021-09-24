import { ICompany, CompanyModel } from "../../models/CompanyModel";
import {
  ICreateCompanyDTO,
  IUpdateCompanyDTO,
  ICompanysRepository,
} from "../ICompanyRepository";

class CompanysRepository implements ICompanysRepository {
  async create({ name }: ICreateCompanyDTO): Promise<ICompany> {
    const user = new CompanyModel({ name });
    await user.save();
    return user;
  }
  list(): Promise<ICompany[]> {
    return CompanyModel.find({}).exec();
  }
  async findById(id: string): Promise<ICompany | null> {
    const user = await CompanyModel.findOne({ _id: id }).exec();
    if (user) {
      return user;
    }
    return null;
  }
  async findByName(name: string): Promise<ICompany | null> {
    const user = await CompanyModel.findOne({ name }).exec();
    if (user) {
      return user;
    }
    return null;
  }
  async delete(id: string): Promise<void> {
    await CompanyModel.deleteOne({ _id: id }).lean().exec();
  }
  async update({ name, id }: IUpdateCompanyDTO): Promise<void> {
    await CompanyModel.updateOne({ _id: id }, { name });
  }
}

export { CompanysRepository };
