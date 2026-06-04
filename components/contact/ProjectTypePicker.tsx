"use client";

import { PROJECT_TYPES } from "@/lib/constants";
import type { ProjectType } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProjectTypePickerProps {
  value: ProjectType | null;
  onChange: (value: ProjectType) => void;
  error?: string;
  disabled?: boolean;
}

export function ProjectTypePicker({
  value,
  onChange,
  error,
  disabled,
}: ProjectTypePickerProps) {
  return (
    <fieldset disabled={disabled} className={cn(disabled && "opacity-50 pointer-events-none")}>
      <legend className="mb-3 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
        Project Type
      </legend>
      <div
        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
        role="radiogroup"
        aria-label="Project type"
        aria-invalid={!!error}
      >
        {PROJECT_TYPES.map((type) => {
          const selected = value === type.id;
          return (
            <label
              key={type.id}
              className={cn(
                "cursor-pointer rounded-xl border p-4 transition-all",
                selected
                  ? "border-red-500 bg-red-500/10 ring-1 ring-red-500"
                  : "border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700"
              )}
            >
              <input
                type="radio"
                name="projectType"
                value={type.id}
                checked={selected}
                onChange={() => onChange(type.id)}
                className="sr-only"
                disabled={disabled}
              />
              <span className="block text-sm font-medium text-zinc-900 dark:text-white">
                {type.label}
              </span>
              <span className="mt-1 block text-xs text-zinc-500 dark:text-zinc-400">
                {type.description}
              </span>
            </label>
          );
        })}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-500 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}
