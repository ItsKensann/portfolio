"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { X, Minus, Square } from "lucide-react";

interface RetroWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  variant?: "purple" | "blue" | "lavender" | "sky";
  onClose?: () => void;
  draggable?: boolean;
}

const variantStyles = {
  purple: "border-[#a78bfa] bg-[#f5f0ff]",
  blue: "border-[#93c5fd] bg-[#f0f7ff]",
  lavender: "border-[#c4b5fd] bg-[#faf5ff]",
  sky: "border-[#7dd3fc] bg-[#f0faff]",
};

const titleBarStyles = {
  purple: "bg-[#a78bfa]",
  blue: "bg-[#93c5fd]",
  lavender: "bg-[#c4b5fd]",
  sky: "bg-[#7dd3fc]",
};

export function RetroWindow({
  title,
  children,
  className = "",
  variant = "purple",
  onClose,
  draggable = false,
}: RetroWindowProps) {
  const Component = motion.div;

  return (
    <Component
      drag={draggable}
      dragMomentum={false}
      className={`${variantStyles[variant]} border-4 shadow-[8px_8px_0px_0px_rgba(26,26,46,0.8)]
        ${className}`}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Title bar */}
      <div
        className={`${titleBarStyles[variant]} border-b-4 border-[#1a1a2e] px-2 py-1 flex items-center justify-between cursor-${draggable ? "grab" : "default"}`}
      >
        <span className="font-mono text-[10px] sm:text-xs text-[#1a1a2e] truncate">
          {title}
        </span>
        <div className="flex gap-1">
          <button
            type="button"
            className="w-4 h-4 sm:w-5 sm:h-5 bg-[#93c5fd] border-2 border-[#1a1a2e] flex items-center justify-center hover:bg-[#7dd3fc] transition-colors"
            aria-label="Minimize"
          >
            <Minus className="w-2 h-2 sm:w-3 sm:h-3 text-[#1a1a2e]" />
          </button>
          <button
            type="button"
            className="w-4 h-4 sm:w-5 sm:h-5 bg-[#a78bfa] border-2 border-[#1a1a2e] flex items-center justify-center hover:bg-[#8b5cf6] transition-colors"
            aria-label="Maximize"
          >
            <Square className="w-2 h-2 sm:w-3 sm:h-3 text-[#1a1a2e]" />
          </button>
          <button
            type="button"
            className="w-4 h-4 sm:w-5 sm:h-5 bg-[#ff6b6b] border-2 border-[#1a1a2e] flex items-center justify-center hover:bg-[#ff5252] transition-colors"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="w-2 h-2 sm:w-3 sm:h-3 text-[#1a1a2e]" />
          </button>
        </div>
      </div>
      {/* body content */}
      <div className="p-3 sm:p-4">{children}</div>
    </Component>
  );
}
