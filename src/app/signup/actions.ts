
"use server";

import connectDB from "@/lib/db";
import { User } from "@/models/User";

export async function signupAction(email: string, password: string) {
  await connectDB();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return { success: false, message: "User with this email already exists" };
  }

  const role = email === 'admin@badhan.com' ? 'admin' : 'user';

  const newUser = new User({ email, password, role });
  await newUser.save();

  return {
    success: true,
    message: "User created successfully",
  };
}
