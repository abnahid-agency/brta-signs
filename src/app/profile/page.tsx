
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mail, Shield, Calendar, Star } from 'lucide-react';
import connectDB from '@/lib/db';
import { User } from '@/models/User';

async function getUser() {
  const token = cookies().get('auth_token')?.value;
  if (!token) return null;

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    const { payload } = await jwtVerify(token, secret);
    
    await connectDB();
    const userFromDb = await User.findOne({ email: payload.email }).lean();

    if (!userFromDb) {
      return null;
    }

    return {
      email: userFromDb.email,
      role: userFromDb.role,
      xp: userFromDb.xp,
      createdAt: userFromDb.createdAt,
    };

  } catch (error) {
    console.error('Failed to verify token or fetch user', error);
    return null;
  }
}

export default async function ProfilePage() {
  const user = await getUser();

  if (!user) {
    return (
      <div className="container flex items-center justify-center py-12">
        <p>Could not load user profile. Please log in again.</p>
      </div>
    );
  }
  
  const joinedDate = new Date(user.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardHeader className="text-center">
             <Avatar className="mx-auto h-24 w-24 mb-4">
              <AvatarImage src={`https://i.pravatar.cc/150?u=${user.email}`} />
              <AvatarFallback>{user.email.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <CardTitle className="text-3xl">User Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 rounded-lg bg-muted/50 p-4">
                <Mail className="h-6 w-6 text-muted-foreground" />
                <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold">{user.email}</p>
                </div>
            </div>
             <div className="flex items-center gap-4 rounded-lg bg-muted/50 p-4">
                <Shield className="h-6 w-6 text-muted-foreground" />
                <div>
                    <p className="text-sm text-muted-foreground">Role</p>
                    <p className="font-semibold capitalize">{user.role}</p>
                </div>
            </div>
             <div className="flex items-center gap-4 rounded-lg bg-muted/50 p-4">
                <Calendar className="h-6 w-6 text-muted-foreground" />
                <div>
                    <p className="text-sm text-muted-foreground">Joined On</p>
                    <p className="font-semibold">{joinedDate}</p>
                </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-muted/50 p-4">
                <Star className="h-6 w-6 text-muted-foreground" />
                <div>
                    <p className="text-sm text-muted-foreground">Experience Points</p>
                    <p className="font-semibold">{user.xp} XP</p>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
