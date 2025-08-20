import { isValidObjectId } from "mongoose";
import httpError from "../helpers/httpError.js";

const isValidId = (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    next(httpError(404, "Invalid id"));
  }
  next();
};
export default isValidId;
