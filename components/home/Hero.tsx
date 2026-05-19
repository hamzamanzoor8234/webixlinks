"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const scrollToStack = () => {
    document.getElementById("tech-stack")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent"
      />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="motion-reduce:opacity-100 motion-reduce:transform-none"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-red-400">
            AI & Cloud Engineering Studio
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Engineering Intelligent AI Agents &{" "}
            <span className="text-brand-gradient">
              Enterprise Cloud Infrastructure
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            From custom MERN/MEAN architectures to autonomous Agentic AI
            workflows across AWS, GCP, and Azure—we build the secure, scalable
            digital foundations for modern enterprises.
          </p>
          <div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button href="/contact" variant="primary">
              Build Your System
            </Button>
            <Button variant="secondary" onClick={scrollToStack}>
              View Stack
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
