'use client';

import Link from 'next/link';
import { Menu, User as UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { decode } from 'jsonwebtoken';
import { logoutAction } from '@/app/login/actions';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';


const navLinks = [
  { href: '/practice', label: 'Practice' },
  { href: '/mock-test', label: 'Mock Test' },
  { href: '/traffic-signs', label: 'Traffic Signs' },
  { href: '/leaderboard', label: 'Leaderboard' },
];

type UserPayload = {
  email: string;
  role: 'admin' | 'user';
  iat: number;
  exp: number;
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<UserPayload | null>(null);

  useEffect(() => {
    const token = Cookies.get('auth_token');
    if (token) {
      try {
        const decoded = decode(token) as UserPayload;
        setUser(decoded);
      } catch (error) {
        console.error("Invalid token", error);
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, [pathname]);

  const handleLogout = async () => {
    await logoutAction();
    setUser(null);
    router.push('/login');
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold font-headline">
            BRTA SIGNS
          </span>
        </Link>

        <nav className="hidden items-center gap-4 md:flex">
          {navLinks.map((link) => (
            <Button key={link.href} variant="link" asChild>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
          {user?.role === 'admin' && (
             <Button variant="link" asChild>
              <Link href="/admin">Dashboard</Link>
            </Button>
          )}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
           {!user ? (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          ) : (
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar>
                    <AvatarImage src={`https://i.pravatar.cc/150?u=${user.email}`} />
                    <AvatarFallback>{user.email.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                   <Link href="/profile">
                    <UserIcon className="mr-2 h-4 w-4" />
                    <span>My Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 p-4">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="mb-4 flex items-center gap-2"
                  >
                    <span className="text-lg font-bold font-headline">
                      BRTA SIGNS
                    </span>
                  </Link>
                </SheetClose>
                
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Button
                      variant="ghost"
                      className="justify-start"
                      asChild
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </Button>
                  </SheetClose>
                ))}
                
                {user?.role === 'admin' && (
                  <SheetClose asChild>
                     <Button variant="ghost" className="justify-start" asChild>
                      <Link href="/admin">Dashboard</Link>
                    </Button>
                  </SheetClose>
                 )}
                 
                <div className="mt-auto flex flex-col gap-2">
                   {!user ? (
                    <>
                       <SheetClose asChild>
                          <Button variant="ghost" asChild>
                            <Link href="/login">Login</Link>
                          </Button>
                       </SheetClose>
                       <SheetClose asChild>
                          <Button asChild>
                            <Link href="/signup">Sign Up</Link>
                          </Button>
                       </SheetClose>
                    </>
                  ) : (
                    <>
                     <SheetClose asChild>
                      <Button variant="ghost" className="justify-start" asChild>
                        <Link href="/profile">My Profile</Link>
                      </Button>
                    </SheetClose>
                     <SheetClose asChild>
                       <Button onClick={handleLogout} className="w-full">Logout</Button>
                     </SheetClose>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
