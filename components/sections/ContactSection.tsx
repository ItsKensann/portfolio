"use client";

import { color, motion } from "framer-motion";
import { RetroWindow } from "@/components/RetroWindow";
import { Mail } from "lucide-react";

// TODO: add link to resume
// name:
// email:

// lucide-react doesn' support brand specific icons due to legal restrications so manually download svg files
const socialLinks = [
  {
    name: "GitHub",
    icon: "",
    href: "https://github.com/ItsKensann",
    color: "#c4b5fd",
  },
  {
    name: "LinkedIn",
    icon: "",
    href: "https://www.linkedin.com/in/kensanputra/",
    color: "#93c5fd",
  },
  {
    name: "Instagram",
    icon: "",
    href: "https://www.instagram.com/itskensan/",
    color: "#93c5fd",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg: p-8 snap-start gap-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{once: true}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg"
      >
        <RetroWindow title="You've Got Mail - New Message" className="w-full">
          <div></div>
        </RetroWindow>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        // viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="w-full max-w-4xl text-center mt-8"
      >
        <div className="font-mono py-2 px-4 bg-[#f5f0ff] border-2 border-[#1a1a2e] shadow-[4px_4px_0px_0px_rgba(26,26,46,0.8)]">
          <p className="text-xs sm:text-sm text-[#4a4a6a]">
            Designed in Figma and made with a lot of snack breaks.
          </p>
          <p className="text-xs sm:text-sm text-[#4a4a6a] mt-2">
            ItsKensan - 2026
          </p>
        </div>
      </motion.footer>
    </section>
  );
}
