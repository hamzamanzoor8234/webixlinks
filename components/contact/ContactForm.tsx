"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ProjectTypePicker } from "./ProjectTypePicker";
import type { ContactFormData, ProjectType } from "@/lib/types";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus:border-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500/20 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-white dark:placeholder:text-zinc-600";

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
  const [submitting, setSubmitting] = useState(false);

  const update = (field: keyof ContactFormData, value: string | ProjectType) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined, submit: undefined }));
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setErrors((prev) => ({ ...prev, submit: undefined }));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || "Submission failed");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrors((prev) => ({
        ...prev,
        submit: err.message || "An error occurred while submitting your brief. Please try again.",
      }));
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-8 text-center">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Brief received</h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Our engineering team will review your specifications and respond
          within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {errors.submit && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-4 text-sm text-red-600 dark:text-red-400">
          {errors.submit}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
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
            disabled={submitting}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
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
            disabled={submitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
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
          disabled={submitting}
        />
        {errors.company && (
          <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.company}</p>
        )}
      </div>

      <ProjectTypePicker
        value={form.projectType}
        onChange={(v) => update("projectType", v)}
        error={errors.projectType}
        disabled={submitting}
      />

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Project Overview <span className="text-zinc-500 dark:text-zinc-600">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={cn(inputClass, "resize-y")}
          placeholder="Describe your architecture goals, timeline, and constraints..."
          disabled={submitting}
        />
      </div>

      <Button type="submit" variant="primary" className="w-full sm:w-auto" disabled={submitting}>
        {submitting ? "Sending Brief..." : "Submit Technical Brief"}
      </Button>

      <p className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm leading-relaxed text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-500">
        NDA available upon request. Data protected under strict end-to-end
        encryption protocols.
      </p>
    </form>
  );
}
