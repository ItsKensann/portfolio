# 💾 Personal Portfolio

A personal portfolio website where I aimed to hit that Windows 95 / Pastel Vaporwave aesthetic.

## 🛠️ Tech Stack

- **Framework:** Next.js 
- **Language:** TypeScript 
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion

## ⚡ Key Features & Implementation

### 1. Retro UI & Layout

- **CSS Scroll Snapping:** The main layout uses `scroll-snap-type: y mandatory` on the parent and `snap-start` on sections to lock the viewport, creating a full-screen "slide" transition effect.
- **Retro Windows:** Custom components styled with Tailwind. Uses `framer-motion` (`initial`/`whileInView`/`transition`) to animate windows popping up as the user scrolls.
- **Responsive Design:** Utilizes Tailwind's `sm:` modifiers to adapt layout for screens wider than 640px.

### 2. Animations & Transitions

- **Loading Screen:** Wraps the loader in `AnimatePresence` to enable exit animations, allowing the loading screen to smoothly fade out (`opacity: 0`) before being removed from the React DOM.
- **Typewriter Effect:** A custom component using `useEffect` and string state to append characters one by one at a 50ms interval.

### 3. Audio Engineering (Music Player)

- **State Management:** Distinguishes between `useState` (for UI rendering like play/pause icons) and `useRef` (to persist the `HTMLAudioElement` without triggering re-renders).
- **Audio Logic:** Directly targets the browser's audio hardware via the `Audio()` constructor.
- **Visualizer:** A randomized bar graph that updates every 150ms via `setInterval` when the track is playing.

### 4. Project Modals

- **Event Handling:** Implements `e.stopPropagation()` on the modal window to ensure clicking inside the project details doesn't close the modal, while clicking the backdrop does.

## 🚀 Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open** [http://localhost:3000](http://localhost:3000) **with your browser.**


