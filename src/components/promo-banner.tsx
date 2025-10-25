import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PromoBanner() {
  return (
    <div className="relative bg-gradient-to-r from-red-500 to-orange-600 text-primary-foreground">
      <div className="container py-2 text-center text-sm font-medium">
        <Link href="/premium" className="inline-flex items-center gap-1 hover:underline">
          <span>&#128640; Unlock Premium Features - Get unlimited mock exams and advanced analytics!</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}