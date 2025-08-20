import jsonwebtoken from "jsonwebtoken";
import { User } from "../models/user.js";
import httpError from "../helpers/httpError.js";

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    next(httpError(401));
  }
  try {
    const { id } = jsonwebtoken.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token !== token) {
      next(httpError(401));
    }
    req.user = user;
    next();
  } catch {
    next(httpError(401));
  }
};

export default authenticate;
