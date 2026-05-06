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
      aria-label="Home"
      className="flex h-14 w-14 items-center justify-center rounded-full bg-card/70 font-medium text-foreground shadow-[inset_0_0_0_1px_var(--color-border),0_12px_40px_-24px_var(--color-foreground)] transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border sm:h-9 sm:w-fit sm:gap-1 sm:px-3"
      href="/"
    >
      <ChevronLeftIcon />
      <span className="hidden sm:inline">Home</span>
    </Link>
  );
}
