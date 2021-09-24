import { IUnit, UnitModel } from "../../models/UnitModel";
import {
  ICreateUnitDTO,
  IUpdateUnitDTO,
  IUnitsRepository,
} from "../IUnitRepository";

class UnitsRepository implements IUnitsRepository {
  async create({ name, companyId }: ICreateUnitDTO): Promise<IUnit> {
    const user = new UnitModel({ name, companyId });
    await user.save();
    return user;
  }
  list(): Promise<IUnit[]> {
    return UnitModel.find({}).exec();
  }
  async findById(id: string): Promise<IUnit | null> {
    const user = await UnitModel.findOne({ _id: id }).exec();
    if (user) {
      return user;
    }
    return null;
  }
  async findByName(name: string): Promise<IUnit | null> {
    const user = await UnitModel.findOne({ name }).exec();
    if (user) {
      return user;
    }
    return null;
  }
  async delete(id: string): Promise<void> {
    await UnitModel.deleteOne({ _id: id }).lean().exec();
  }
  async update({ name, companyId, id }: IUpdateUnitDTO): Promise<void> {
    await UnitModel.updateOne({ _id: id }, { name, companyId });
  }
}

export { UnitsRepository };
