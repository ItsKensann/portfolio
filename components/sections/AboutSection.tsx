"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
            <div className="flex gap-2 sm:gap-4 text-xs sm:text-sm border-b-2 border-[#1a1a2e] pb-2 mb-4">
              <span className="font-mono text-[#4a4a6a] underline cursor-pointer hover:text-[#3365FA]">
                File
              </span>
              <span className="font-mono text-[#4a4a6a] underline cursor-pointer hover:text-[#3365FA]">
                Edit
              </span>
              <span className="font-mono text-[#4a4a6a] underline cursor-pointer hover:text-[#3365FA]">
                Format
              </span>
              <span className="font-mono text-[#4a4a6a] underline cursor-pointer hover:text-[#3365FA]">
                View
              </span>
              <span className="font-mono text-[#4a4a6a] underline cursor-pointer hover:text-[#3365FA]">
                Help
              </span>
            </div>

            {/* Text box */}
            <div className="bg-[#f5f0ff] border-2 border-[#1a1a2e] p-4 min-h-[300px] font-sans text-sm md:text-base 2xl:text-xl text-[#1a1a2e] leading-relaxed">
              <p className="mb-4">
                {">"} I was introduced to computer science through a UI course
                in high school. Coming from an art background, I was immediately
                drawn to the combination of designing and engineering functional
                apps that people enjoy using.
              </p>

              <p className="mb-4">
                {">"} While most of my creative work happens indoors, I like to
                stay active through weightlifting and have recently gotten
                hooked on bouldering!
              </p>
              <p className="mb-4">
                {">"} Music is my reset button. Feel free to vibe to some of the
                custom tracks I've made in the player on the right. When I'm
                offline, I stay busy jamming out on my acoustic guitar.
              </p>
              <p className="mb-4">
                {">"} I spent my college years deeply involved in the collegiate
                Esports scene, where I learned communication and strategy as the
                varsity team captain for the Valorant team!
              </p>
            </div>
            <div className="flex justify-between border-t-2 border-[#1a1a2e] pt-2 font-mono text-xs text-[#4a4a6a]">
              <p>Ln 1, Col 1</p>
              <p>100%</p>
              <p>UTF-8</p>
            </div>
          </div>
        </RetroWindow>
      </motion.div>
    </section>
  );
}
