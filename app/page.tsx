"use client";
import { useState } from "react";
import { Project } from "@/types/project";
import { motion } from "framer-motion";
import { LoadingScreen } from "@/components/LoadingScreen";
import { FloatingDecorations } from "@/components/FloatingDecorations";
import { MusicPlayer } from "@/components/MusicPlayer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

const socialLinks = [
  {
    name: "GitHub",
    icon: "github",
    href: "https://github.com/ItsKensann",
    color: "#c4b5fd",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/kensanputra/",
    color: "#93c5fd",
  },
  {
    name: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/itskensan/",
    color: "#f18bfa",
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          {/* background */}
          <div
            className="fixed inset-0 z-0 font-sans animate-grid-flow"
            style={{
              backgroundColor: "#D6C8FF",
              backgroundImage: `
      linear-gradient(to right, #BDAAF2 1px, transparent 1px),
      linear-gradient(to bottom, #BDAAF2 1px, transparent 1px),
      linear-gradient(135deg, #D6C8FF 0%, #E8DFFF 50%, #c9bfed 100%)
    `,
              backgroundSize: "46px 46px, 46px 46px, 100% 100%",
              backgroundAttachment: "fixed",
            }}
          />

          <FloatingDecorations />

          <MusicPlayer />

          <motion.div className="hidden sm:flex fixed bottom-4 left-4 z-50 flex-col 2xl:flex-row gap-3 items-start md:items-center">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                className="flex flex-col items-center gap-2 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center border-2 border-[#1a1a2e] shadow-[4px_4px_0px_0px_rgba(26,26,46,0.8)] group-hover:shadow-[2px_2px_0px_0px_rgba(26,26,46,0.8)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all"
                  style={{
                    backgroundColor:
                      social.color === "#1a1a2e" ? "#fff5f7" : social.color,
                  }}
                >
                  <img
                    className="w-7 h-7 md:w-8 md:h-8 text-[#1a1a2e]"
                    src={`${social.icon}.svg`}
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>

          <main
            className={`relative h-screen overflow-y-auto ${
              selectedProject ? "z-[200]" : "z-10"
            }`}
            style={{ scrollSnapType: "y mandatory", scrollBehavior: "smooth" }}
          >
            <HeroSection />
            <AboutSection />
            <ProjectsSection
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
            />
            <ExperienceSection />
          </main>
        </>
      )}
    </>
  );
}
