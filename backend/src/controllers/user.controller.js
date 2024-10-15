import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

// Register User
export const register = async (req, res) => {
  try {
    // Get data
    const { fullName, email, phoneNumber, password, role } = req.body;

    // Validate data
    const fields = [fullName, email, phoneNumber, password, role];
    if (fields.some((field) => field === "")) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    // Check DB if user exists
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    }

    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save in DB
    const registerUser = await User.create({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });

    return res.status(200).json({
      message: `${registerUser.fullName} Registered successfully`,
      success: true,
    });
  } catch (error) {
    console.error("Error in registration:", error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};
