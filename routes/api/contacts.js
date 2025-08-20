import express from "express";

import ctrlWrapper from "../../helpers/ctrlWrapper.js";
import validateBody from "../../middlewares/validateBody.js";
import authenticate from "../../middlewares/authenticate.js";
import isValidId from "../../middlewares/isValidId.js";

import addSchema from "../../schemas/contact.js";
import * as ctrl from "../../controllers/contacts.js";

const contactsRouter = express.Router();

contactsRouter.get("/", ctrlWrapper(ctrl.getAll));

contactsRouter.get("/:id", ctrlWrapper(ctrl.getById));

contactsRouter.post("/", validateBody(addSchema), ctrlWrapper(ctrl.add));

contactsRouter.delete("/:id", ctrlWrapper(ctrl.removeById));

contactsRouter.put(
  "/:id",
  validateBody(addSchema),
  ctrlWrapper(ctrl.updateById)
);

contactsRouter.patch(
  "/:id/favorite",
  validateBody(addSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

export default contactsRouter;
