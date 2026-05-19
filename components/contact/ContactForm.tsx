"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ProjectTypePicker } from "./ProjectTypePicker";
import type { ContactFormData, ProjectType } from "@/lib/types";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder:text-zinc-600 transition-colors focus:border-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500/20";

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    projectType: null,
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof ContactFormData, value: string | ProjectType) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<string, string>> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Corporate email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address";
    if (!form.company.trim()) next.company = "Company name is required";
    if (!form.projectType) next.projectType = "Select a project type";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-8 text-center">
        <h3 className="text-lg font-semibold text-white">Brief received</h3>
        <p className="mt-2 text-sm text-zinc-400">
          Our engineering team will review your specifications and respond
          within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={cn(inputClass, errors.name && "border-red-500/50")}
            placeholder="Jane Chen"
            autoComplete="name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
            Corporate Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={cn(inputClass, errors.email && "border-red-500/50")}
            placeholder="jane@company.com"
            autoComplete="email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-zinc-300">
          Company Name
        </label>
        <input
          id="company"
          type="text"
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
          className={cn(inputClass, errors.company && "border-red-500/50")}
          placeholder="Acme Corp"
          autoComplete="organization"
        />
        {errors.company && (
          <p className="mt-1 text-sm text-red-400">{errors.company}</p>
        )}
      </div>

      <ProjectTypePicker
        value={form.projectType}
        onChange={(v) => update("projectType", v)}
        error={errors.projectType}
      />

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">
          Project Overview <span className="text-zinc-600">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={cn(inputClass, "resize-y")}
          placeholder="Describe your architecture goals, timeline, and constraints..."
        />
      </div>

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Submit Technical Brief
      </Button>

      <p className="rounded-lg border border-zinc-800 bg-zinc-900/30 px-4 py-3 text-sm leading-relaxed text-zinc-500">
        NDA available upon request. Data protected under strict end-to-end
        encryption protocols.
      </p>
    </form>
  );
}
