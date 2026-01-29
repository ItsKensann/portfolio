"use client";
import { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { RetroWindow } from "@/components/RetroWindow";
import { FloatingDecorations } from "@/components/FloatingDecorations";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    <>
      {/* isLoading starts true, trigger loading bar  */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          {/* background */}
          <div
            className="fixed inset-0 z-0 font-sans"
            style={{
              backgroundColor:
                "#D6C8FF linear-gradient(to right bottom, #bdaaf2, #b0b6f7, #a8c1f8, #a5cbf6, #aad3f2)",
              backgroundImage: `
              linear-gradient(to right, #BDAAF2  2px, transparent 2px),
                linear-gradient(to bottom, #BDAAF2  2px, transparent 2px)
              `,
              backgroundSize: "46px 46px",
            }}
          />

          {/* Floating decoration */}
          <FloatingDecorations />
          {/* Main content */}
          <main
            className="relative z-10 h-screen overflow-y-auto"
            style={{ scrollSnapType: "y mandatory", scrollBehavior: "smooth" }}
          >
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
          </main>
        </>
      )}
    </>
  );
}
