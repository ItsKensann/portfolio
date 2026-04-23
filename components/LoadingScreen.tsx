"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RetroWindow } from "./RetroWindow";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  // state variables that change once set amount of time passes
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 1500; // 3000ms -> 3 seconds
    const interval = 25; // update every 50 ms
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }, 200);
          return 100;
        }
        return next;
      });
    }, interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#ddd6fe]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Pre load decorations */}
          <motion.div
            className="absolute top-20 left-20 text-4xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            {"</>"}
          </motion.div>
          <motion.div
            className="absolute top-40 right-32 text-3xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5 }}
          >
            {"{ }"}
          </motion.div>
          <motion.div
            className="absolute bottom-32 left-40 text-3xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
          >
            {"[ ]"}
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-20 text-4xl"
            animate={{ rotate: [0, 360] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 4,
              ease: "linear",
            }}
          >
            {"*"}
          </motion.div>

          <RetroWindow
            title="system.exe"
            variant="sky"
            className="w-[90%] max-w-md"
          >
            <div className="space-y-4">
              <p className="font-mono text-lg sm:text-xl text[#1a1a2e] text-center">
                Loading portfolio...
              </p>

              {/* Progress bar container */}
              <div className="bg-[#1a1a2e] p-1 border-2 border-[#1a1a2e]">
                <div className="bg-[#f5f0ff] h-6 relative overflow-hidden">
                  {/* Fill bar */}
                  <motion.div
                    className="h-full bg-[#a78bfa]"
                    style={{ width: `${progress}%` }}
                  />
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, #1a1a2e 1px, transparent 1px),
                        linear-gradient(to bottom, #1a1a2e 1px, transparent 1px)
                      `,
                      backgroundSize: "8px 8px",
                    }}
                  ></div>
                </div>
              </div>
              <p className="font-mono text-base sm:text-lg text-[#1a1a2e] text-center">
                {Math.round(progress)}% complete
              </p>

              <div className="text-center">
                <span className="font-mono text-xs sm:text-sm text-[#4a4a6a]">
                  {progress < 30 && "Loading pixel assets..."}
                  {progress >= 30 && progress < 60 && "Preparing effects..."}
                  {progress >= 60 && "Almost ready!"}
                </span>
              </div>
            </div>
          </RetroWindow>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
