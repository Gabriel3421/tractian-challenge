import { IUser, UsersModel } from "../../models/UsersModel";
import {
  ICreateUserDTO,
  IUpdateUserDTO,
  IUsersRepository,
} from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  async create({ name, companyId }: ICreateUserDTO): Promise<IUser> {
    const user = new UsersModel({ name, companyId });
    await user.save();
    return user;
  }
  list(): Promise<IUser[]> {
    return UsersModel.find({}).exec();
  }
  async findById(id: string): Promise<IUser | null> {
    const user = await UsersModel.findOne({ _id: id }).exec();
    if (user) {
      return user;
    }
    return null;
  }
  async findByName(name: string): Promise<IUser | null> {
    const user = await UsersModel.findOne({ name }).exec();
    if (user) {
      return user;
    }
    return null;
  }
  async findByNameAndCompanyId(
    name: string,
    companyId: string
  ): Promise<IUser | null> {
    const user = await UsersModel.findOne({ name, companyId }).exec();
    if (user) {
      return user;
    }
    return null;
  }
  async delete(id: string): Promise<void> {
    await UsersModel.deleteOne({ _id: id }).lean().exec();
  }
  async update({ name, companyId, id }: IUpdateUserDTO): Promise<void> {
    await UsersModel.updateOne({ _id: id }, { name, companyId });
  }
}

export { UsersRepository };
