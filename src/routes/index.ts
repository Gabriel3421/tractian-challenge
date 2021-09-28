import { Router } from "express";

import { assetRoutes } from "./asset.routes";
import { companyRoutes } from "./company.routes";
import { unitRoutes } from "./unit.routes";
import { usersRoutes } from "./user.routes";

const router = Router();
router.use("/users", usersRoutes);
router.use("/unit", unitRoutes);
router.use("/company", companyRoutes);
router.use("/asset", assetRoutes);

export { router };
