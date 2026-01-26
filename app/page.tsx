"use client";
import { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { RetroWindow } from "@/components/RetroWindow";
import { FloatingDecorations } from "@/components/FloatingDecorations";

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
                linear-gradient(to bottom, #BDAAF2 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px",
            }}
          >
            <RetroWindow title="test">
              <p>hello</p>
            </RetroWindow>
          </div>

          {/* Floating decoration */}
          <FloatingDecorations />
          {/* Main content */}
          <main></main>
        </>
      )}
    </>
  );
}
