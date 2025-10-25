import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FileQuestion, Users, Image as ImageIcon, LineChart } from 'lucide-react';

const stats = [
  {
    title: 'Total Questions',
    value: '512',
    icon: <FileQuestion className="h-6 w-6 text-muted-foreground" />,
    change: '+2 in last 24h',
  },
  {
    title: 'Total Signs',
    value: '88',
    icon: <ImageIcon className="h-6 w-6 text-muted-foreground" />,
    change: '+5 this month',
  },
  {
    title: 'Registered Users',
    value: '12,345',
    icon: <Users className="h-6 w-6 text-muted-foreground" />,
    change: '+150 today',
  },
   {
    title: 'Exams Taken',
    value: '45,678',
    icon: <LineChart className="h-6 w-6 text-muted-foreground" />,
    change: '+1,200 today',
  },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
      <p className="text-muted-foreground">Overview of the application.</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

       <div className="mt-8">
        <Card>
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Recent activity feed will be shown here.</p>
            </CardContent>
        </Card>
       </div>
    </div>
  );
}
