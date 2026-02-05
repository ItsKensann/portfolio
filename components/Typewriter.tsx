"use client";

import { useState, useEffect } from "react";

// interface for what to pass into the function as prop
interface TypeWriterProps {
  text: string;
  delay?: number;
  className?: string;
}

export function Typewriter({ text, delay = 50, className }: TypeWriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const randomDelay = delay + Math.random() * 100;

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, randomDelay);
      return () => clearInterval(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className={`${className}`}>
      {displayText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
}
