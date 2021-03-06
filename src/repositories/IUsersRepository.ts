import { IUser } from "../models/UsersModel";

interface ICreateUserDTO {
  name: string;
  companyId: string;
}
interface IUpdateUserDTO {
  name: string;
  companyId: string;
  id: string;
}

interface IUsersRepository {
  findById(id: string): Promise<IUser | null>;
  findByName(name: string): Promise<IUser | null>;
  findByNameAndCompanyId(
    name: string,
    companyId: string
  ): Promise<IUser | null>;
  list(): Promise<IUser[]>;
  create({ name, companyId }: ICreateUserDTO): Promise<IUser>;
  update({ name, companyId, id }: IUpdateUserDTO): void;
  delete(id: string): void;
}

export { IUsersRepository, ICreateUserDTO, IUpdateUserDTO };
