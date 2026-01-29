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
              backgroundColor: "#D6C8FF",
              backgroundImage: `
      linear-gradient(to right, #BDAAF2 1px, transparent 1px),
      linear-gradient(to bottom, #BDAAF2 1px, transparent 1px),
      linear-gradient(135deg, #D6C8FF 0%, #E8DFFF 50%, #d1c7f5 100%)
    `,
              backgroundSize: "46px 46px, 46px 46px, 100% 100%",
              backgroundAttachment: "fixed",
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
