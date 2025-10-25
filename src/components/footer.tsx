import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold font-headline">
              BRTA SIGNS
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Developed by{' '}
            <a
              href="https://abnahid.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Ab Nahid Agency
            </a>
            .
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/practice"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Practice
            </Link>
            <Link
              href="/mock-test"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Mock Test
            </Link>
            <Link
              href="/traffic-signs"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Signs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
