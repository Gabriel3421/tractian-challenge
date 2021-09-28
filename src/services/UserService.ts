import { IUser } from "../models/UsersModel";
import { ICompanysRepository } from "../repositories/ICompanyRepository";
import {
  ICreateUserDTO,
  IUsersRepository,
  IUpdateUserDTO,
} from "../repositories/IUsersRepository";

class UserService {
  constructor(
    private usersRepository: IUsersRepository,
    private companyRepository: ICompanysRepository
  ) {}
  async create({ companyId, name }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByName(name);
    if (userAlreadyExists && userAlreadyExists.companyId === companyId) {
      throw new Error("User Already Exists!");
    }
    const companyIdExists = await this.companyRepository.findById(companyId);
    if (!companyIdExists) {
      throw new Error("Invalid Company id");
    }
    this.usersRepository.create({ name, companyId });
  }
  list(): Promise<IUser[]> {
    return this.usersRepository.list();
  }
  listOne(id: string): Promise<IUser | null> {
    return this.usersRepository.findById(id);
  }
  listOneByName(name: string): Promise<IUser | null> {
    return this.usersRepository.findByName(name);
  }
  async delete(id: string): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findById(id);
    if (!userAlreadyExists) {
      throw new Error("User dont Exists!");
    }
    await this.usersRepository.delete(id);
  }
  async update({ name, companyId, id }: IUpdateUserDTO): Promise<void> {
    const userIdAlreadyExists = await this.usersRepository.findById(id);
    if (!userIdAlreadyExists) {
      throw new Error("User dont Exists!");
    }
    const userAlreadyExists = await this.usersRepository.findByName(name);
    if (userAlreadyExists && userAlreadyExists.companyId === companyId) {
      throw new Error("User Already Exists!");
    }
    const companyIdExists = await this.companyRepository.findById(companyId);
    if (!companyIdExists) {
      throw new Error("Invalid Company id");
    }
    await this.usersRepository.update({ name, companyId, id });
  }
}

export { UserService };
