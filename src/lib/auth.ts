import { LoginLog } from "@/models/LoginLog";
import { User } from "@/models/User";
import connectDB from "./db";

export async function login(email: string, password: string) {
  await connectDB();

  const user = await User.findOne({ email });
  if (!user) {
    await new LoginLog({ email, status: "failed" }).save();
    return { success: false, message: "Invalid credentials" };
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    await new LoginLog({ email, status: "failed" }).save();
    return { success: false, message: "Invalid credentials" };
  }

  await new LoginLog({ email, status: "success" }).save();
  return {
    success: true,
    message: "Login successful",
    user: { email: user.email, role: user.role },
  };
}
