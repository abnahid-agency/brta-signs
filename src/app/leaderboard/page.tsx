
import Image from 'next/image';
import { Trophy } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import connectDB from '@/lib/db';
import { User } from '@/models/User';
import type { IUser } from '@/models/User';

type LeaderboardUser = Pick<IUser, 'email' | 'xp'> & {
  // Even though the model has a name, the user data from lib/data.ts did not.
  // We'll use the email prefix for the name.
  name: string;
  rank: number;
}

async function getLeaderboardData(): Promise<LeaderboardUser[]> {
    await connectDB();
    const users = await User.find({}).sort({ xp: -1 }).limit(100).lean();

    return users.map((user, index) => ({
        ...user,
        name: user.email.split('@')[0], // Use email prefix as name for now
        rank: index + 1,
    }));
}


export default async function LeaderboardPage() {
    const leaderboardData = await getLeaderboardData();

  return (
    <div className="container py-12">
      <div className="text-center">
        <Trophy className="mx-auto h-12 w-12 text-accent" />
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl font-headline">
          Leaderboard
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          See who's at the top of their game. Compare your rank with other learners.
        </p>
      </div>

      <Card className="mx-auto mt-12 max-w-4xl">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/6 text-center">Rank</TableHead>
                <TableHead className="w-1/2">User</TableHead>
                <TableHead className="text-right">XP</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboardData.map((user) => (
                  <TableRow key={user.email} className={user.rank <= 3 ? 'bg-accent/10' : ''}>
                    <TableCell className="text-center text-xl font-bold text-primary">
                      {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : user.rank === 3 ? '🥉' : user.rank}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-4">
                          <Image
                            alt={user.name}
                            className="h-10 w-10 rounded-full object-cover"
                            height="40"
                            src={`https://i.pravatar.cc/150?u=${user.email}`}
                            width="40"
                          />
                        <span className="font-medium capitalize">{user.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-semibold">{user.xp} XP</TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
