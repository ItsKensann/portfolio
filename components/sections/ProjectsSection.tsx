"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Folder, ExternalLink, createLucideIcon } from "lucide-react";
import { RetroWindow } from "@/components/RetroWindow";

// temp projects array before i create them on the supabase database
const projects = [
  {
    id: 1,
    name: "Price Checker",
    icon: "//",
    description:
      "Developed full stack app for Columbia Sportswear to retrieve pricing information on any retail item.",
    tech: ["C#", "Azure", ".NET"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    name: "Capstone ",
    icon: "[]",
    description:
      "Grow virtual plants by completing your daily tasks. Gamified productivity!",
    tech: ["Next.js", "Firebase", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    name: "Focus",
    icon: "{}",
    description:
      "Grow virtual plants by completing your daily tasks. Gamified productivity!",
    tech: ["Next.js", "Firebase", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    name: "Posture checker",
    icon: "<>",
    description:
      "Grow virtual plants by completing your daily tasks. Gamified productivity!",
    tech: ["Next.js", "Firebase", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    id: 5,
    name: "Portfolio website",
    icon: "**",
    description: "The portfolio you are looking at right now!",
    tech: ["Next.js", "Tailwind", "Supabase"],
    link: "#",
    github: "#",
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg: p-8 snap-start"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        <RetroWindow title="My Projects - File Explorer" variant="blue">
          <div className="space-y-4">
            {/* File path toolbar */}
            <div className="flex gap-2 border-b-2 border-[#1a1a2e] pb-2">
              <span className="font-mono text-xs sm:text-sm text-[#4a4a6a]">
                C:\Users\kensan_putra\projects
              </span>
            </div>

            {/* Folder structure with all my projects*/}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-2">
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  type="button"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                  className="flex flex-col items-center gap-2 p-3 hover:bg-[#93c5fd]/30 transition-colors cursor-pointer group"
                >
                  <div className="relative">
                    <Folder className="w-12 h-12 sm:w-16 sm:h-16 fill-[#c4b5fd] stroke-[#1a1a2e] stroke-2 group-hover:scale-110 transition-transform" />
                    <span className="absolute -top-1 -right-1 text-xs sm:text-sm font-mono text-[#1a1a2e] bg-[#93c5fd] px-1 border border-[#1a1a2e]">
                      {project.icon}
                    </span>
                  </div>
                  <span className="font-mono text-xs sm:text-sm text-[#1a1a2e] text-center leading-tight">
                    {project.name}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* bottom bar */}
            <div className="flex justify-between border-t-2 border-[#1a1a2e] pt-2 font-mono text-xs text-[#4a4a6a]">
              <span>{projects.length} Items</span>
              <span>Click To Open</span>
            </div>
          </div>
        </RetroWindow>
      </motion.div>

      {/* Project modal to appear when project is clicked */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1a1a2e]/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
