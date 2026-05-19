import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonBaseProps {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  type?: undefined;
  onClick?: undefined;
  disabled?: undefined;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-gradient text-white shadow-lg shadow-red-500/20 hover:shadow-red-500/30 hover:brightness-110",
  secondary:
    "border border-zinc-700 bg-zinc-900/50 text-zinc-100 hover:border-zinc-600 hover:bg-zinc-800/50",
  ghost: "text-zinc-300 hover:text-white hover:bg-zinc-800/50",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50";

export function Button({
  children,
  className,
  variant = "primary",
  href,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const styles = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
