import { cn } from "@/lib/utils";

type ContainerSize = "default" | "wide" | "narrow";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: ContainerSize;
};

const sizeClasses: Record<ContainerSize, string> = {
  default: "max-w-6xl",
  wide: "max-w-7xl",
  narrow: "max-w-3xl",
};

export function Container({ children, className, size = "default" }: ContainerProps) {
  return <div className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", sizeClasses[size], className)}>{children}</div>;
}
