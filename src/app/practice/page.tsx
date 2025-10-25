
import Link from 'next/link';
import { BookOpenCheck, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { trafficSigns } from '@/lib/data';

const topics = [
  { name: 'Driving Rules & Regulations', slug: 'rules', description: 'General knowledge, rules, and regulations.' },
  { name: 'Mandatory Signs', slug: 'mandatory', description: 'Signs that you must obey.' },
  { name: 'Warning Signs', slug: 'warning', description: 'Signs that warn you of potential hazards.' },
  { name: 'Informatory Signs', slug: 'informatory', description: 'Signs that provide information.' },
];

export default function PracticePage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <BookOpenCheck className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl font-headline">
          Practice Questions
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Select a topic to start your practice session. Each quiz consists of questions designed to test your knowledge.
        </p>
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="space-y-4">
          {topics.map((topic) => (
            <Link href={`/practice/${topic.slug}`} key={topic.slug} passHref>
              <Card className="group cursor-pointer transition-all hover:bg-muted/50 hover:shadow-md">
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary">{topic.name}</h3>
                    <p className="text-sm text-muted-foreground">{topic.description}</p>
                  </div>
                  <ChevronRight className="h-6 w-6 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
