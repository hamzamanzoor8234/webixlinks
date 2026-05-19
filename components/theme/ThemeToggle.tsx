"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && (resolvedTheme ?? theme) === "dark";

  const toggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-lg border transition-colors",
        "border-zinc-200 bg-zinc-100 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-200",
        "dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-white",
        className
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {!mounted ? (
        <span className="h-5 w-5" aria-hidden />
      ) : isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
