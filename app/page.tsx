"use client";
import { useState } from "react";
import { RetroWindow } from "@/components/RetroWindow";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <>
      {/* isLoading starts true, trigger loading bar  */}

      {!isLoading && (
        <>
          a78bfa f5f0ff
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
        </>
      )}
    </>
  );
}
