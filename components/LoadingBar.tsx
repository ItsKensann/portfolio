"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingBarProps {
  onComplete: () => void;
}

export function LoadingBar({ onComplete }: LoadingBarProps) {}
