"use client";

import { motion } from "framer-motion";
import { RetroWindow } from "@/components/RetroWindow";
import { Typewriter } from "@/components/Typewriter";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 snap-start">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        <RetroWindow title="welcome.txt" variant="purple" className="w-full">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="font-mono text-2xl sm:text-3xl md:text-4xl text-[#1a1a2e] leading-tight">
              Hello world!
              <br></br>
              <Typewriter text="I'm Kensan Putra." />
            </h1>
            <div className="h-1 bg-[#1a1a2e] w-48" />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Text Side */}
              <div className="flex-1 space-y-4">
                <p className="font-sans text-lg sm:text-xl md:text-2xl text-[#4a4a6a] leading-relaxed">
                  Recent Computer Science graduate with a passion for
                  <span className="text-[#1a1a2e] font-medium">
                    {" "}
                    creative development.
                  </span>{" "}
                  Currently seeking full-time Software Engineering roles.
                  <br />
                  <br />
                  Let's build something together {":)"}
                  <br />
                  <a
                    href="mailto:itskensann@gmail.com"
                    className="hover:underline decoration-wavy decoration-pastel-pink"
                  >
                    <Typewriter
                      text="itskensann@gmail.com"
                      delay={70}
                      className="text-[#1a1a2e] font-bold cursor-pointer"
                    />
                  </a>
                </p>
              </div>

              <motion.div
                // whileHover={{ scale: 1.05 }}
                className="relative shrink-0"
              >
                <div className="w-32 h-32 md:w-50 md:h-50 p-1 bg-white border-4 border-b-[#ffffff] border-r-[#ffffff] border-t-[#808080] border-l-[#808080] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                  <img
                    src="/profile_picture.png"
                    alt="Kensan Putra"
                    className="w-full h-full object-cover grayscale-[20%] contrast-[1.1]"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#00ff00] border-2 border-[#1a1a2e] rounded-full" />
              </motion.div>
            </div>

            {/* Scroll to learn more >> Say Hi! */}
            <div className="flex gap-4 pt-8">
              <a
                href="#about"
                className="px-4 py-2 bg-[#b8e0ff] border-2 border-[#1a1a2e] font-mono text-base sm:text-lg text-[#1a1a2e] hover:bg-[#99d4ff] transition-colors shadow-[4px_4px_0px_0px_rgba(26,26,46,0.8)] hover:shadow-[2px_2px_0px_0px_rgba(26,26,46,0.8)] hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                Scroll To Learn More {">>"}{" "}
              </a>
            </div>
          </div>
        </RetroWindow>
      </motion.div>
    </section>
  );
}
