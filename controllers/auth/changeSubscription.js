import { User } from "../../models/user.js";
import httpError from "../../utils/httpError.js";

const changeSubscription = async (req, res) => {
  const { subscription } = req.body;
  const availableSubscriptions = ["starter", "pro", "business"];
  if (!availableSubscriptions.includes(subscription)) {
    throw httpError(400, "Invalid subscription type");
  }

  const result = await User.findByIdAndUpdate(
    req.user._id,
    { subscription },
    { new: true }
  );
  if (!result) {
    throw httpError(404, "Missing field subscription");
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      result: result,
    },
  });
};

export default changeSubscription;
