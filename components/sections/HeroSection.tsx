"use client";

import { motion } from "framer-motion";
import { RetroWindow } from "@/components/RetroWindow";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 snap-start">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <RetroWindow title="welcome.txt" variant="purple" className="w-full">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="font-mono text-2xl sm:text-3xl md:text-4xl text-[#1a1a2e] leading-tight">
              Hello world
            </h1>
            <div className="h-1 bg-[#1a1a2e] w-48" />

            <p className="font-sans text-xl sm:text-2xl md:text-3xl text-[#4a4a6a] leading-relaxed">
              A creative developer who loves building cool & functional web
              experiences. Welcome to my little corner of the internet!
            </p>
          </div>
        </RetroWindow>
      </motion.div>
    </section>
  );
}
