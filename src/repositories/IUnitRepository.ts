import { IUnit } from "../models/UnitModel";

interface ICreateUnitDTO {
  name: string;
  companyId: string;
}
interface IUpdateUnitDTO {
  name: string;
  companyId: string;
  id: string;
}

interface IUnitsRepository {
  findById(id: string): Promise<IUnit | null>;
  findByName(name: string): Promise<IUnit | null>;
  list(): Promise<IUnit[]>;
  create({ name, companyId }: ICreateUnitDTO): Promise<IUnit>;
  update({ name, companyId, id }: IUpdateUnitDTO): void;
  delete(id: string): void;
}

export { IUnitsRepository, ICreateUnitDTO, IUpdateUnitDTO };
