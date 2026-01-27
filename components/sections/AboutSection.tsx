"use client";

import { motion } from "framer-motion";
import { RetroWindow } from "@/components/RetroWindow";

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 snap-start"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl"
      >
        <RetroWindow
          title="notepad.exe - about_me.txt"
          variant="sky"
          className="w-full"
        >
          <div className="space-y-4">
            {/* Notepad toolbar */}
            <div className="flex gap-4 border-b-2 border-[#1a1a2e] pb-2 mb-4">
              <span className="font-mono text-sm text-[#4a4a6a] underline cursor-pointer hover:text-[#3365FA]">
                File
              </span>
              <span className="font-mono text-sm text-[#4a4a6a] underline cursor-pointer hover:text-[#3365FA]">
                Edit
              </span>
              <span className="font-mono text-sm text-[#4a4a6a] underline cursor-pointer hover:text-[#3365FA]">
                Format
              </span>
              <span className="font-mono text-sm text-[#4a4a6a] underline cursor-pointer hover:text-[#3365FA]">
                View
              </span>
              <span className="font-mono text-sm text-[#4a4a6a] underline cursor-pointer hover:text-[#3365FA]">
                Help
              </span>
            </div>

            {/* Text box */}
            <div className="bg-[#f5f0ff] border-2 border-[#1a1a2e] p-4 min-h-[300px] font-sans text-lg sm:text-xl md:text-2xl text-[#1a1a2e] leading-relaxed">
              <p className="mb-4">
                {">"} Hi there! I{"'"}m a passionate developer with a love for
                creating beautiful, user-friendly web applications.
              </p>
            </div>
          </div>
        </RetroWindow>
      </motion.div>
    </section>
  );
}
