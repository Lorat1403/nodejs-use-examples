import express from "express";

import ctrlWrapper from "../../helpers/ctrlWrapper.js";
import validateBody from "../../middlewares/validateBody.js";

import addSchema from "../../schemas/contact.js";
import * as ctrl from "../../controllers/contacts.js";

const router = express.Router();

// router.get("/", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

router.get("/", ctrlWrapper(ctrl.getAll));

// router.get("/:contactId", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

router.get("/:id", ctrlWrapper(ctrl.getById));

// router.post("/", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

router.post("/", validateBody(addSchema), ctrlWrapper(ctrl.add));

// router.delete("/:contactId", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

router.delete("/:id", ctrlWrapper(ctrl.removeById));

// router.put("/:contactId", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

router.put("/:id", validateBody(addSchema), ctrlWrapper(ctrl.updateById));

export default router;
