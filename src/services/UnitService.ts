import { IUnit } from "../models/UnitModel";
import { ICompanysRepository } from "../repositories/ICompanyRepository";
import {
  ICreateUnitDTO,
  IUnitsRepository,
  IUpdateUnitDTO,
} from "../repositories/IUnitRepository";

class UnitService {
  constructor(
    private usersRepository: IUnitsRepository,
    private companyRepository: ICompanysRepository
  ) {}
  async create({ companyId, name }: ICreateUnitDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByName(name);
    if (userAlreadyExists && userAlreadyExists.companyId === companyId) {
      throw new Error("Unit Already Exists!");
    }
    const companyIdExists = await this.companyRepository.findById(companyId);
    if (!companyIdExists) {
      throw new Error("Invalid Company id");
    }
    this.usersRepository.create({ name, companyId });
  }
  list(): Promise<IUnit[]> {
    return this.usersRepository.list();
  }
  listOne(id: string): Promise<IUnit | null> {
    return this.usersRepository.findById(id);
  }
  async delete(id: string): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findById(id);
    if (!userAlreadyExists) {
      throw new Error("Unit dont Exists!");
    }
    await this.usersRepository.delete(id);
  }
  async update({ name, companyId, id }: IUpdateUnitDTO): Promise<void> {
    const userIdAlreadyExists = await this.usersRepository.findById(id);
    if (!userIdAlreadyExists) {
      throw new Error("Unit dont Exists!");
    }
    const userAlreadyExists = await this.usersRepository.findByName(name);
    if (userAlreadyExists && userAlreadyExists.companyId === companyId) {
      throw new Error("Unit Already Exists!");
    }
    const companyIdExists = await this.companyRepository.findById(companyId);
    if (!companyIdExists) {
      throw new Error("Invalid Company id");
    }
    await this.usersRepository.update({ name, companyId, id });
  }
}

export { UnitService };
