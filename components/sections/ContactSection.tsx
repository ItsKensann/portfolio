"use client";

import Link from "next/link";
import { color, motion } from "framer-motion";
import { RetroWindow } from "@/components/RetroWindow";
import { Mail, Send, BookUser } from "lucide-react";

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
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg"
      >
        <RetroWindow title="You've Got Mail - New Message" className="w-full">
          <div className="space-y-4">
            <div className="space-y-6 border-[#1a1a2e] pb-3">
              <div className="flex items-center gap-6">
                <span className="font-mono text-sm text-[#1a1a2e] w-12">
                  Name:
                </span>
                <input
                  type="name"
                  className="text-lg font-sans p-1 border-2 w-48 resize-none focus:outline-none focus:ring-2 focus:ring-[#a78bfa]"
                />
              </div>
              <div className="flex items-center gap-9">
                <span className="font-mono text-sm text-[#1a1a2e] w-12">
                  Email:
                </span>
                <input
                  type="email"
                  className="text-lg font-sans p-1 border-2 w-64 resize-none focus:outline-none focus:ring-2 focus:ring-[#a78bfa]"
                />
              </div>
            </div>

            {/* Message area */}
            <div className="space-y-3 mt-8">
              <textarea
                placeholder="Type your message here..."
                className="w-full h-48 p-3 bg-[#f5f0ff] border-2 border-[#1a1a2e] font-sans text-lg placeholder-[#4a4a6a]/50 resize-none focus:outline-none focus:ring-2 focus:ring-[#a78bfa]"
              />
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-2 bg-[#a78bfa] border-2 border-[#1a1a2e] font-mono text-sm text-[#1a1a2e] hover:bg-[#8b5cf6] transition-colors shadow-[4px_4px_0px_0px_rgba(26,26,46,0.8)] hover:shadow-[2px_2px_0px_0px_rgba(26,26,46,0.8)] hover:translate-x-[2px] hover:translate-y-[2px] hover:cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </div>
          </div>
        </RetroWindow>
      </motion.div>

      <Link href="/resume">
        <button
          type="button"
          className="mt-2 flex items-center gap-2 px-4 py-2 bg-[#7dd3fc] border-2 border-[#1a1a2e] font-mono text-sm text-[#1a1a2e] transition-colors hover:bg-[#33BBFA] shadow-[4px_4px_0px_0px_rgba(26,26,46,0.8)] hover:shadow-[2px_2px_0px_0px_rgba(26,26,46,0.8)] hover:translate-x-[2px] hover:translate-y-[2px] hover:cursor-pointer"
        >
          <BookUser className="w-6 h-6" />
          View Full Resume
        </button>
      </Link>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
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
