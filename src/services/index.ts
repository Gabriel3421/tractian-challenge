import {
  assetsRepository,
  companysRepository,
  unitsRepository,
  usersRepository,
} from "../repositories/implementations";
import { AssetService } from "./AssetService";
import { CompanyService } from "./CompanyService";
import { UnitService } from "./UnitService";
import { UserService } from "./UserService";

const assetService = new AssetService(assetsRepository, unitsRepository);
const companyService = new CompanyService(companysRepository);
const unitService = new UnitService(unitsRepository, companysRepository);
const userService = new UserService(usersRepository, companysRepository);

export { companyService, unitService, userService, assetService };
