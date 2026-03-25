"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Folder, ExternalLink, createLucideIcon, Github } from "lucide-react";
import { RetroWindow } from "@/components/RetroWindow";
import { Typewriter } from "../Typewriter";

// temp projects array before i create them on the supabase database
const projects = [
  {
    id: 1,
    name: "Focus",
    name_lower_case: "focus",
    icon: "{}",
    description:
      "Developed Focus to solve my own need for a distraction-free workspace. It’s a full-stack MERN app featuring a Pomodoro timer that stays in sync across tabs and a suite of task management and journaling tools. To keep the UI snappy, I used TanStack Query for instant updates and designed a custom backend to feed a personalized analytics dashboard. I also integrated Gemini AI to give users specific, data-driven productivity insights.",
    tech: [
      "React",
      "Express.js",
      "Node.js",
      "MongoDB",
      "TanStack Query",
      "Google Gemini API",
    ],
    preview: "/focus.png",
    link: "https://focus-two-zeta.vercel.app/",
    github: "https://github.com/ItsKensann/focus",
  },

  {
    id: 2,
    name: "Columbia Price Checker",
    name_lower_case: "barcode_price_checker",
    icon: "$$",
    description:
      "Full stack app Columbia Sportswear to retrieve pricing information on any retail item. I developed both the backend pricing API with multi-database architecture and transaction tracking, and the frontend application that integrates multiple microservices to enable customers to scan product UPCs and instantly view accurate, location-specific pricing and product details. Two GitHub links are provided for the frontend and backend service respectively.",
    tech: ["C#", "Blazor", ".NET", "Azure Functions", "Cosmos DB"],
    preview: "/price_checker.png",
    link: "https://github.com/ItsKensann/retail-price-checker",
    github: "https://github.com/ItsKensann/commerce-pricing-service",
  },
  {
    id: 3,
    name: "Real Time Physiological Sensors",
    name_lower_case: "real_time_physiological_sensors",
    icon: "[]",
    description:
      "Capstone group project in collaboration with the Human-Machine Teaming Lab at OSU to eventually reliable real time communication between humans and robots during disaster scenarios. Improved the accuracy and the throughput of an existing data collection tool for wearable physiological sensors.  [Closed source - media and details available on request]",
    tech: [
      "Python",
      "Dash",
      "Matplotlib",
      "XSens",
      "Myo",
      "Pupillabs",
      "Zephyr",
    ],
    preview: "/capstone.png",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    name: "SwiftPark",
    name_lower_case: "swiftpark",
    icon: "<>",
    description:
      "SwiftPark is an in-progress real-time parking occupancy system that uses computer vision to detect vehicle presence in parking lots. Built a YOLOv8-powered detection pipeline that processes camera feeds, counts vehicles, and determines per-spot availability. The backend exposes live occupancy data via a FastAPI REST and WebSocket API, enabling a frontend map UI where users can see which spots are open in real time. Designed with a B2B model in mind, targeting parking garage operators.",
    tech: ["Python", "YOLOv8", "OpenCV", "FastAPI", "WebSocket"],
    preview: "/swiftpark.png",
    link: "#",
    github: "https://github.com/ItsKensann/parking_cv",
  },
  {
    id: 5,
    name: "Portfolio website",
    name_lower_case: "portfolio_website",
    icon: "//",
    description: "The portfolio you are looking at right now :]",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    preview: "/portfolio.gif",
    link: "#",
    github: "https://github.com/ItsKensann/portfolio",
  },
  // {
  //   id: 6,
  //   name: "Slow n reverb",
  //   icon: "<>",
  //   description: "",
  //   tech: ["Next.js", "Firebase", "Tailwind"],
  //   link: "#",
  //   github: "#",
  // },
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
        <RetroWindow title="my_projects - file_explorer" variant="blue">
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
            className="fixed inset-0 bg-[#1a1a2e]/50 z-50 overflow-x-auto flex items-center justify-start p-8"
            onClick={() => setSelectedProject(null)}
          >
            <div className="flex flex-nowrap items-center gap-20 m-auto min-w-max">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <RetroWindow
                  title={`${selectedProject.name_lower_case}.exe`}
                  variant="lavender"
                  onClose={() => setSelectedProject(null)}
                  className="w-full max-w-lg"
                  windowButtons={true}
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-mono bg-[#a78bfa] px-2 py-1 border-2 border-[#1a1a2e]">
                        {selectedProject.icon}
                      </span>
                      <h3 className="font-mono text-xl sm:text-2xl text-[#1a1a2e]">
                        {selectedProject.name}
                      </h3>
                    </div>

                    <p className="font-sans text-lg sm:text-xl text-[#4a4a6a] leading-relaxed">
                      {selectedProject.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-12">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="p-2 bg-[#a78bfa] border-2 border-[#1a1a2e] font-mono text-xs text-[#1a1a2e]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 t-2">
                      {selectedProject.link !== "#" && (
                        <a
                          href={selectedProject.link}
                          className="flex items-center gap-2 px-3 py-2 bg-[#93c5fd] border-2 border-[#1a1a2e] font-mono text-sm text-[#1a1a2e] hover:bg-[#7dd3fc] transition-colors shadow-[2px_2px_0px_0px_rgba(26,26,46,0.8)]"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {selectedProject.github !== "#" && (
                        <a
                          href={selectedProject.github}
                          className="flex items-center gap-2 px-3 py-2 bg-[#c4b5fd] border-2 border-[#1a1a2e] font-mono text-sm text-[#1a1a2e] hover:bg-[#a78bfa] transition-colors shadow-[2px_2px_0px_0px_rgba(26,26,46,0.8)]"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img className="w-4 h-4" src="/github.svg" />
                          Source
                        </a>
                      )}
                    </div>
                  </div>
                </RetroWindow>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <RetroWindow
                  title="preview.exe"
                  onClose={() => setSelectedProject(null)}
                  className="w-full max-w-xl"
                  windowButtons={true}
                >
                  <div className="flex w-full h-full bg-black border-2 border-[#1a1a2e] overflow-hidde">
                    <img
                      src={selectedProject.preview}
                      alt={selectedProject.name}
                      className="w-full h-full object-cover grayscale-[20%] contrast-[1.1]"
                    />
                  </div>
                </RetroWindow>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
