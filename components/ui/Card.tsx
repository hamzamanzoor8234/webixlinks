import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/40 dark:shadow-none dark:hover:border-zinc-700",
        className
      )}
    >
      {children}
    </div>
  );
}
