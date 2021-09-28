import { IUser } from "../models/UsersModel";
import { ICompanysRepository } from "../repositories/ICompanyRepository";
import {
  ICreateUserDTO,
  IUsersRepository,
  IUpdateUserDTO,
} from "../repositories/IUsersRepository";

interface ILoginReturn {
  _id: string;
  name: string;
  companyId: string;
  companyName: string;
}

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
  async login(name: string, companyId: string): Promise<ILoginReturn | null> {
    const user = await this.usersRepository.findByNameAndCompanyId(
      name,
      companyId
    );
    if (!user) {
      return null;
    }
    const userCompany = await this.companyRepository.findById(user.companyId);
    return {
      // eslint-disable-next-line no-underscore-dangle
      _id: user._id,
      companyId: user.companyId,
      name: user.name,
      companyName: userCompany!.name,
    };
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
