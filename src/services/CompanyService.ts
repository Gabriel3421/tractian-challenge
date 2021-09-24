import { ICompany } from "../models/CompanyModel";
import {
  ICreateCompanyDTO,
  ICompanysRepository,
  IUpdateCompanyDTO,
} from "../repositories/ICompanyRepository";

class CompanyService {
  constructor(private companyRepository: ICompanysRepository) {}
  async create({ name }: ICreateCompanyDTO): Promise<void> {
    const companyAlreadyExists = await this.companyRepository.findByName(name);
    if (companyAlreadyExists) {
      throw new Error("Company Already Exists!");
    }
    this.companyRepository.create({ name });
  }
  list(): Promise<ICompany[]> {
    return this.companyRepository.list();
  }
  listOne(id: string): Promise<ICompany | null> {
    return this.companyRepository.findById(id);
  }
  async delete(id: string): Promise<void> {
    const companyAlreadyExists = await this.companyRepository.findById(id);
    if (!companyAlreadyExists) {
      throw new Error("Company dont Exists!");
    }
    await this.companyRepository.delete(id);
  }
  async update({ name, id }: IUpdateCompanyDTO): Promise<void> {
    const userIdAlreadyExists = await this.companyRepository.findById(id);
    if (!userIdAlreadyExists) {
      throw new Error("Company dont Exists!");
    }
    const companyAlreadyExists = await this.companyRepository.findByName(name);
    if (companyAlreadyExists) {
      throw new Error("Company name already Exists!");
    }
    await this.companyRepository.update({ name, id });
  }
}

export { CompanyService };
