import { ScanForm } from './scan-form';
import { ShieldAlert } from 'lucide-react';

export default function ScanPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl text-center">
        <ShieldAlert className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl font-headline">
          Traffic Sign Scanner
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Have a picture of a traffic sign you don&apos;t recognize? Upload it here, and our AI will instantly provide you with its name, category, and a detailed explanation.
        </p>
      </div>

      <div className="mt-12">
        <ScanForm />
      </div>
    </div>
  );
}
