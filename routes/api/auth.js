import express from "express";

import ctrl from "../../controllers/auth/index.js";
import ctrlWrapper from "../../helpers/ctrlWrapper.js";
import validateBody from "../../middlewares/validateBody.js";
import authenticate from "../../middlewares/authenticate.js";
import schemas from "../../models/user.js";

const authRouter = express.Router();

// sinup
authRouter.post(
  "/signup",
  validateBody(schemas.registerSchema),
  ctrlWrapper(ctrl.register)
);
// login
authRouter.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

authRouter.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

authRouter.post("/logout", authenticate, ctrlWrapper(ctrl.logout));

authRouter.patch("/", authenticate, ctrlWrapper(ctrl.changeSubscription));

export default authRouter;
