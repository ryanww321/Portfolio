import type { ReactNode } from "react";
import { HomeButton } from "@/components/ui/HomeButton";

type HomeHeaderProps = {
  children?: ReactNode;
};

export function HomeHeader({ children }: HomeHeaderProps) {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center bg-gradient-to-b from-background via-background/75 to-background/0 p-[var(--padding-pageMargin)] transition-colors duration-300 md:p-[max(var(--padding-pageMargin),5vh)]">
      <div className="flex justify-start sm:-ml-1.5">
        <HomeButton />
      </div>

      {children ?? <div />}

      <div />
    </header>
  );
}
