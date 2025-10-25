
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
import { signupAction } from "./actions";
import { useToast } from "@/hooks/use-toast";

const signupSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});


type SignupForm = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupForm) => {
    startTransition(async () => {
      setError(null);
      const res = await signupAction(data.email, data.password);

      if (!res.success) {
        setError(res.message);
        toast({
          title: "Signup Failed",
          description: res.message,
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Signup Successful",
        description: "You have been successfully registered! Redirecting to login...",
      });

      router.push("/login");
    });
  };

  return (
    <div className="container flex min-h-[calc(100vh-8rem)] items-center justify-center py-12">
        <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader>
          <div className="flex flex-col items-center gap-2.5 py-2">
            <CardTitle className="text-[22px] font-bold">
              Create an Account
            </CardTitle>
            <p className="text-muted-foreground text-center">
              Start your journey with us today.
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

            <div>
              <Label htmlFor="password" className="mb-[5px]">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                autoComplete="new-password"
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

             <div>
              <Label htmlFor="confirmPassword" className="mb-[5px]">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                disabled={isPending}
                {...register("confirmPassword")}
                placeholder="*************"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Creating account..." : "Sign Up"}
            </Button>
          </form>
           <p className="text-center text-sm text-muted-foreground mt-4">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-primary hover:underline">
                Login
              </Link>
            </p>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}
