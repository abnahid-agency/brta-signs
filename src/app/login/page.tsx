"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from 'next/link';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginAction } from "./actions";
import { useToast } from "@/hooks/use-toast";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginForm) => {
    startTransition(async () => {
      setError(null);
      const res = await loginAction(data.email, data.password);

      if (!res.success) {
        setError(res.message);
        toast({
          title: "Login Failed",
          description: res.message,
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Login Successful",
        description: "Welcome back!",
      });
      
      if (res.user?.role === 'admin') {
        router.push("/admin");
      } else {
        router.push("/profile");
      }
      router.refresh();
    });
  };

  return (
    <div className="container flex min-h-[calc(100vh-8rem)] items-center justify-center py-12">
        <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader>
          <div className="flex flex-col items-center gap-2.5 py-2">
            <CardTitle className="text-[22px] font-bold">
              Welcome back!
            </CardTitle>
            <p className="text-muted-foreground text-center">
              Let’s login to your account & get started
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div>
              <Label htmlFor="email" className="mb-[5px]">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="ex: johndoe@gmail.com"
                autoComplete="email"
                disabled={isPending}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password" className="mb-[5px]">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                disabled={isPending}
                {...register("password")}
                placeholder="*************"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Logging in..." : "Login"}
            </Button>
          </form>
           <p className="text-center text-sm text-muted-foreground mt-4">
              Don't have an account?{' '}
              <Link href="/signup" className="font-semibold text-primary hover:underline">
                Sign up
              </Link>
            </p>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}
