"use server";

import { login } from "@/lib/auth";
import { SignJWT } from "jose";
import { cookies } from "next/headers";

export async function loginAction(email: string, password: string) {
  const result = await login(email, password);
  if (!result.success) return result;

  if (!result.user?.email || !result.user?.role) {
    throw new Error("User email or role missing from result");
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

  const token = await new SignJWT({ email: result.user.email, role: result.user.role })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(secret);

  cookies().set("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60, // 1 hour
  });

  return { ...result, user: { email: result.user.email, role: result.user.role } };
}

export async function logoutAction() {
  cookies().delete("auth_token");
}
