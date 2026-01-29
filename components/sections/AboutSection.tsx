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
              <p className="mb-4">
                {">"} My most recent experience was interning at
              </p>
              <p className="mb-4">
                {">"} Other than programming, I am very passionate about fitness
                and have really gotten into bouldering recently! (I post my
                climbs on my Instagram)
              </p>
              <p className="mb-4">
                {">"} Music is my gateway to destress, hence the Lo-Fi music
                player implemented in this website. When I have time I like to
                jam out my favorite songs on my acoustic guitar.
              </p>
              <p className="mb-4">
                {">"} Fun fact I used spent a lot of time competing in a
                competitive Esports video game called Valorant!
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
