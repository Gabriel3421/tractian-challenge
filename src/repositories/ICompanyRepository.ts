import { ICompany } from "../models/CompanyModel";

interface ICreateCompanyDTO {
  name: string;
}
interface IUpdateCompanyDTO {
  name: string;
  id: string;
}

interface ICompanysRepository {
  findById(id: string): Promise<ICompany | null>;
  findByName(name: string): Promise<ICompany | null>;
  list(): Promise<ICompany[]>;
  create({ name }: ICreateCompanyDTO): Promise<ICompany>;
  update({ name }: IUpdateCompanyDTO): void;
  delete(id: string): void;
}

export { ICompanysRepository, ICreateCompanyDTO, IUpdateCompanyDTO };
