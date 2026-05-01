import Link from "next/link";

function ChevronLeftIcon() {
  return (
    <svg aria-hidden="true" className="icon-size" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path d="m15 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HomeButton() {
  return (
    <Link
      className="flex h-9 w-fit items-center gap-1 rounded-full bg-card/70 px-3 font-medium text-foreground shadow-[inset_0_0_0_1px_var(--color-border),0_12px_40px_-24px_var(--color-foreground)] transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border"
      href="/"
    >
      <ChevronLeftIcon />
      <span>Home</span>
    </Link>
  );
}
