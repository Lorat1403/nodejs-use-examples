import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

import { User } from "../../models/user.js";
import httpError from "../../helpers/httpError.js";

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw httpError(401, "Email or password is wrong");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw httpError(401, "Email or password is wrong");
  }

  const payload = {
    id: user._id,
  };

  const token = jsonwebtoken.sign(payload, SECRET_KEY, { expiresIn: "23h" });

  resjson({ token });
};

export default login;
