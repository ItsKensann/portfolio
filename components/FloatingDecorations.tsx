"use client";

import { motion } from "framer-motion";

const decorations = [
  { symbol: "</>", top: "10%", left: "5%", delay: 0 },
  { symbol: "{ }", top: "15%", right: "10%", delay: 0.2 },
  { symbol: "[ ]", top: "25%", left: "8%", delay: 0.4 },
  { symbol: "=>", top: "35%", right: "5%", delay: 0.6 },
  { symbol: "//", top: "45%", left: "3%", delay: 0.8 },
  { symbol: "**", top: "55%", right: "8%", delay: 1 },
  { symbol: "&&", top: "65%", left: "6%", delay: 1.2 },
  { symbol: "||", top: "75%", right: "4%", delay: 1.4 },
  { symbol: "!=", top: "85%", left: "10%", delay: 1.6 },
  { symbol: "++", top: "20%", right: "15%", delay: 0.3 },
  { symbol: "<<", top: "60%", right: "12%", delay: 0.9 },
  { symbol: ">>", top: "80%", right: "10%", delay: 1.1 },
];

const colors = ["#a78bfa", "#93a3fd", "#c4b5fd", "#cb7dfc"];

export function FloatingDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {decorations.map((dec, i) => (
        <motion.div
          key={i}
          className="absolute text-xl sm:text-2xl md:text-3xl font-mono"
          style={{
            top: dec.top,
            left: dec.left,
            right: dec.right,
            color: colors[i % 4],
            opacity: 0.5,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.5, y: [0, -15, 0] }}
          transition={{
            opacity: {
              delay: dec.delay,
              duration: 0.5,
            },
            y: {
              delay: dec.delay,
              repeat: Number.POSITIVE_INFINITY,
              duration: 3 + Math.random() * 2,
              ease: "easeInOut",
            },
          }}
        >
          {dec.symbol}
        </motion.div>
      ))}
    </div>
  );
}
