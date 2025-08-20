import express from "express";

import ctrlWrapper from "../../helpers/ctrlWrapper.js";
import validateBody from "../../middlewares/validateBody.js";

import addSchema from "../../schemas/contact.js";
import * as ctrl from "../../controllers/contacts.js";

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", validateBody(addSchema), ctrlWrapper(ctrl.add));

router.delete("/:id", ctrlWrapper(ctrl.removeById));

router.put("/:id", validateBody(addSchema), ctrlWrapper(ctrl.updateById));

router.patch(
  "/:id/favorite",
  validateBody(addSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

export default router;
