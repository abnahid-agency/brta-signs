import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"
import { Header } from '@/components/header';
import { PromoBanner } from '@/components/promo-banner';
import { Footer } from '@/components/footer';


export const metadata: Metadata = {
  title: 'BRTA SIGNS - Bangladesh Driving License Practice',
  description:
    'Practice for the Bangladesh driving license theory test with free mock exams, traffic sign guides, and over 500+ MCQ questions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased flex flex-col'
        )}
      >
        <PromoBanner />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
