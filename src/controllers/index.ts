import {
  assetService,
  companyService,
  unitService,
  userService,
} from "../services";
import { AssetController } from "./AssetController";
import { CompanyController } from "./CompanyController";
import { UnitController } from "./UnitController";
import { UserController } from "./UserController";

const assetController = new AssetController(assetService);
const companyController = new CompanyController(companyService);
const unitController = new UnitController(unitService);
const userController = new UserController(userService);

export { assetController, companyController, unitController, userController };
