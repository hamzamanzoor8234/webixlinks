"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/lib/types";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="rounded-xl border border-zinc-200 bg-white transition-all dark:border-zinc-800 dark:bg-zinc-900/30"
          >
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="pr-4">
                <span className="mb-1.5 inline-block rounded-md bg-red-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-red-500 dark:text-red-400">
                  {item.category}
                </span>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white md:text-lg">
                  {item.question}
                </h3>
              </div>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-200",
                  isOpen && "rotate-180 text-red-500 dark:text-red-400"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isOpen ? "max-h-[500px]" : "max-h-0"
              )}
            >
              <div className="border-t border-zinc-100 px-6 py-5 text-sm leading-relaxed text-zinc-600 dark:border-zinc-800/50 dark:text-zinc-300 md:text-base">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
