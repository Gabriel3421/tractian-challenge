import { IUser } from "../models/UsersModel";
import {
  ICreateUserDTO,
  IUsersRepository,
  IUpdateUserDTO,
} from "../repositories/IUsersRepository";

class UserService {
  constructor(private usersRepository: IUsersRepository) {}
  async create({ companyId, name }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByName(name);
    if (userAlreadyExists) {
      throw new Error("User Already Exists!");
    }
    /**
     * add verificação da compania
     */
    this.usersRepository.create({ name, companyId });
  }
  list(): Promise<IUser[]> {
    return this.usersRepository.list();
  }
  listOne(id: string): Promise<IUser | null> {
    return this.usersRepository.findById(id);
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
    if (userAlreadyExists) {
      throw new Error("User Already Exists!");
    }
    /**
     * add verificação da compania
     */
    await this.usersRepository.update({ name, companyId, id });
  }
}

export { UserService };
