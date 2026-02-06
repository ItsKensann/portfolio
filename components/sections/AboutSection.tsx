"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookUser } from "lucide-react";
import { RetroWindow } from "@/components/RetroWindow";

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 snap-start gap-4"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
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
                {">"} I discovered computer science through a UI course in high
                school. Coming from an art background, I was immediately drawn
                to the intersection of design and engineering functional tools
                that people enjoy using.
              </p>

              <p className="mb-4">
                {">"} While most of my creative work happens indoors, I stay
                active through weightlifting and have recently gotten hooked on
                bouldering.
              </p>
              <p className="mb-4">
                {">"} Music is my reset button. Feel free to vibe to some of the
                custom tracks I've made in the player below. When I'm offline,
                I'm usually jamming on my acoustic guitar.
              </p>
              <p className="mb-4">
                {">"} I spent my college years deeply involved in the collegiate
                Esports scene, where I learned communication and strategy as the
                Varsity Captain for the Valorant team.
              </p>
            </div>
            <div className="flex justify-between border-t-2 border-[#1a1a2e] pt-2 font-mono text-xs text-[#4a4a6a]">
              <p>Ln 1, Col 1</p>
              <p>100%</p>
              <p>UTF-8</p>
            </div>
          </div>
        </RetroWindow>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mt-8"
        >
          <Link href="/resume">
            <button
              type="button"
              className="mt-2 flex items-center gap-2 px-4 py-2 bg-[#7dd3fc] border-2 border-[#1a1a2e] font-mono text-sm text-[#1a1a2e] transition-colors hover:bg-[#33BBFA] shadow-[4px_4px_0px_0px_rgba(26,26,46,0.8)] hover:shadow-[2px_2px_0px_0px_rgba(26,26,46,0.8)] hover:translate-x-[2px] hover:translate-y-[2px] hover:cursor-pointer"
            >
              <BookUser className="w-6 h-6" />
              View Full Resume
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
