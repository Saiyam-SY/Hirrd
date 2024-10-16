import jwt from "jsonwebtoken";

export const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Authentication required", success: false });
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res.status(401).json({ message: "Invalid token", success: false });
    }

    req.id = decode.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token", success: false });
  }
};
