"use client";

import Link from "next/link";
import { BookUser } from "lucide-react";
import { motion } from "framer-motion";
import { RetroWindow } from "@/components/RetroWindow";
import { FolderOpen, FileText, ChevronRight, Folder } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Columbia Sportswear",
    period: "May 2025 - Jul 2025",
    description:
      "Worked with the retail technology team to develop a price checker application for users to receive personalized pricing based on store location.",
    icon: ">>",
  },

  {
    id: 2,
    role: "Undergraduate Teaching Assitant",
    company: "Oregon State University",
    period: "Sep 2024 - May 2025",
    description:
      "Led class recitation sessions, held Zoom office hour sessions and graded student projects.",
    icon: "->",
  },
  {
    id: 3,
    role: "Software Engineer Intern",
    company: "Safe Harbor Solutions",
    period: "June 2024 - Sep 2024",
    description:
      "Collaborated with 5 other developers to build a React web-based Power BI alternative for Frontier Senior Living, displaying labor statistics for 106 senior living communities across 19 states.",
    icon: "=>",
  },
  // {
  //   id: 4,
  //   role: "Community Assitant",
  //   company: "Oregon State University",
  //   period: "June 2022 - June 2024",
  //   description:
  //     "Developed strong communication and collaboration skills by organizing community events, fostering a supportive and inclusive environment for over 400 residents.",
  //   icon: "~~",
  // },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 snap-start"
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl"
      >
        <RetroWindow
          title="experience.sys"
          variant="lavender"
          className="w-full"
        >
          <div className="space-y-2 font-mono text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <FolderOpen className="w-5 h-5 text-[#a78bfa] fill-[#c4b5fd] stroke-[#1a1a2e]" />
              <span className="text-[#4a4a6a]">
                C:\Users\kensan_putra\experience
              </span>
            </div>

            {/* Experience tree */}
            <div className="ml-4 border-l-2 border-[#1a1a2e] pl-4 space-y-4">
              {experiences.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.3 }}
                  className="relative"
                >
                  <div className="absolute -left-4 top-3 w-4 h-0.5 bg-[#1a1a2e]" />

                  {/* Individual job card */}
                  <div className="bg-[#f5f0ff] border-2 border-[#1a1a2e] p-3 shadow-[4px_4px_0px_0px_rgba(26,26,46,0.8)]">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-1">
                        <FileText className="w-5 h-5 text-[#a78bfa] stroke-[#1a1a2e]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-[#1a1a2e] text-base sm:text-lg">
                          {job.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 text-[#4a4a6a] text-xs sm:text-sm">
                          <ChevronRight className="w-4 h-4" />
                          <span>{job.company}</span>
                          <span className="px-2 py-0.5 bg-[#93c5fd] border border-[#1a1a2e] text-xs">
                            {job.period}
                          </span>
                        </div>
                        <p className="mt-2 text-[#4a4a6a] text-sm sm:text-lg font-sans leading-relaxed">
                          {job.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </RetroWindow>

        <Link href="/resume" className="flex items-center justify-center mt-8">
          <button
            type="button"
            className="mt-2 flex items-center gap-2 px-4 py-2 bg-[#7dd3fc] border-2 border-[#1a1a2e] font-mono text-sm text-[#1a1a2e] transition-colors hover:bg-[#33BBFA] shadow-[4px_4px_0px_0px_rgba(26,26,46,0.8)] hover:shadow-[2px_2px_0px_0px_rgba(26,26,46,0.8)] hover:translate-x-[2px] hover:translate-y-[2px] hover:cursor-pointer"
          >
            <BookUser className="w-6 h-6" />
            View Full Resume
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
