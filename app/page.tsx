"use client";
import { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { RetroWindow } from "@/components/RetroWindow";
import { FloatingDecorations } from "@/components/FloatingDecorations";
import { HeroSection } from "@/components/sections/HeroSection";

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
              linear-gradient(to right, #BDAAF2  2px, transparent 2px),
                linear-gradient(to bottom, #BDAAF2  2px, transparent 2px)
              `,
              backgroundSize: "46px 46px",
            }}
          />

          {/* Floating decoration */}
          <FloatingDecorations />
          {/* Main content */}
          <main className="relative z-10 h-screen ">
            <HeroSection />
          </main>
        </>
      )}
    </>
  );
}
