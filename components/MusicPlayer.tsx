"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { RetroWindow } from "./RetroWindow";

const tracks = [
  { name: "dreamer", artist: "Kensan", src: "/dreamer.mp3" },
  { name: "sonder", artist: "Kensan", src: "/sonder.mp3" },
  { name: "fly high", artist: "Kensan", src: "/fly_high.mp3" },
  { name: "happy days", artist: "Kensan", src: "/happy_days.mp3" },
  { name: "restless", artist: "Kensan", src: "/restless.mp3" },
  { name: "playroom", artist: "Kensan", src: "/playroom.mp3" },
];

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [bars, setBars] = useState<number[]>([3, 5, 2, 6, 4, 3, 5, 7, 4, 2]);

  // specify that the audioRef will be of type HTML audio element
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationRef = useRef<ReturnType<typeof setInterval>>(null);

  // Initialize Audio
  useEffect(() => {
    // create HTMLAudioElement
    audioRef.current = new Audio(tracks[currentTrack].src);

    // autoplay
    const handleEnded = () => nextTrack();
    audioRef.current.addEventListener("ended", handleEnded);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("ended", handleEnded);
      }
    };
  }, []);

  // Handle Play/Pause Logic
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current
        .play()
        .catch((e) => console.log("Playback blocked by browser:", e));
      animationRef.current = setInterval(() => {
        setBars(bars.map(() => Math.floor(Math.random() * 8) + 1));
      }, 150);
    } else {
      audioRef.current.pause();
      if (animationRef.current) clearInterval(animationRef.current);
    }
  }, [isPlaying, currentTrack]); // Watch currentTrack to resume play after skipping

  // change the audio
  const switchTrack = (index: number) => {
    if (audioRef.current) {
      audioRef.current.src = tracks[index].src;
      if (isPlaying) audioRef.current.play();
    }
    setCurrentTrack(index);
  };

  const nextTrack = () => {
    const next = (currentTrack + 1) % tracks.length;
    switchTrack(next);
  };

  const prevTrack = () => {
    const prev = (currentTrack - 1 + tracks.length) % tracks.length;
    switchTrack(prev);
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      className="fixed bottom-4 right-12 z-40 cursor-grab active:cursor-grabbing"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <RetroWindow
        title="lofi_player.exe"
        variant="lavender"
        className="w-56 sm:w-64"
      >
        {/* Audio visualizer */}
        <div className="space-y-3">
          <div className="bg-[#1a1a2e] p-2 flex items-end justify-center gap-1 h-16">
            {bars.map((height, i) => (
              <motion.div
                key={i}
                className="w-3 sm:w-4 bg-[#a78bfa]"
                animate={{ height: isPlaying ? height * 5 : 4 }}
                transition={{ duration: 0.1 }}
              />
            ))}
          </div>

          {/* Track info */}
          <div className="text-center">
            <p className="font-mono text-sm sm:text-base text-[#1a1a2e] truncate">
              {tracks[currentTrack].name}
            </p>
            <p className="font-mono text-xs text-[#4a4a6a]">
              {tracks[currentTrack].artist}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={prevTrack}
              className="w-8 h-8 bg-[#93c5fd] border-2 border-[#1a1a2e] flex items-center justify-center hover:bg-[#7dd3fc] transition-colors shadow-[2px_2px_0px_0px_rgba(26,26,46,0.8)]"
            >
              <SkipBack className="w-4 h-4 text-[#1a1a2e]" />
            </button>

            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 bg-[#a78bfa] border-2 border-[#1a1a2e] flex items-center justify-center hover:bg-[#8b5cf6] transition-colors shadow-[2px_2px_0px_0px_rgba(26,26,46,0.8)]"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-[#1a1a2e]" />
              ) : (
                <Play className="w-5 h-5 text-[#1a1a2e] ml-0.5" />
              )}
            </button>

            <button
              type="button"
              onClick={nextTrack}
              className="w-8 h-8 bg-[#93c5fd] border-2 border-[#1a1a2e] flex items-center justify-center hover:bg-[#7dd3fc] transition-colors shadow-[2px_2px_0px_0px_rgba(26,26,46,0.8)]"
            >
              <SkipForward className="w-4 h-4 text-[#1a1a2e]" />
            </button>
          </div>
        </div>
      </RetroWindow>
    </motion.div>
  );
}
