import { Router } from "express";
import { AuthenticateController } from "../controllers/authenticate.controller";
// import { AuthorizeController } from '../controllers/authorize.controller';
import asyncMiddleware from "../middlewares/asyncMiddleware";

const router = Router();

// Authentifizierung
router.post("/login", asyncMiddleware(AuthenticateController.login));
router.post("/token", asyncMiddleware(AuthenticateController.refreshToken));

// Autorisierung
// router.post('/authorize', asyncMiddleware(AuthenticateController.authorize));

// Rollen- und Berechtigungsmanagement
// router.post('/roles', createRole);
// router.post('/permissions', createPermission);
// router.post('/assign-role', assignRoleToUser);

export default router;
