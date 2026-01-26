"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  // state variables that change once set amount of time passes
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 1000; // 3000ms -> 3 seconds
    const interval = 50; // update every 50 ms
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
