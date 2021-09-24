import { AssetsRepository } from "./AssetRepository";
import { CompanysRepository } from "./CompanyRepository";
import { UnitsRepository } from "./UnitRepository";
import { UsersRepository } from "./UsersRepository";

const unitsRepository = new UnitsRepository();
const usersRepository = new UsersRepository();
const companysRepository = new CompanysRepository();
const assetsRepository = new AssetsRepository();

export {
  unitsRepository,
  usersRepository,
  companysRepository,
  assetsRepository,
};
