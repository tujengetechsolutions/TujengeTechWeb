import Link from "next/link";
import { Check } from 'lucide-react'

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-5">
      <div className="max-w-md">
        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-accent">
          <span className="text-2xl"><Check /></span>
        </div>
        <h1 className="font-display text-3xl font-bold tracking-tight">
          Message Sent!
        </h1>
        <p className="mt-4 text-muted-foreground">
          Thank you for reaching out. We typically respond within one business day.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-accent px-6 text-sm font-semibold text-accent-foreground"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}