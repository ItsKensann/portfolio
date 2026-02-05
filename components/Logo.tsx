export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className} // Allows you to resize it easily with Tailwind
    >
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="4"
        fill="#D6C8FF"
        stroke="#1a1a2e"
        strokeWidth="4"
      />
      <path
        d="M14 14H22V26H26V18H34V26H38V34H30V38H22V50H14V14Z"
        fill="#ffb3c6"
      />
      <path
        d="M14 14H22V26H26V18H34V26H38V34H30V38H22V50H14V14Z"
        stroke="#1a1a2e"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M40 14H58V38H50V50H42V38H40V14ZM48 22V30H50V22H48Z"
        fill="#b8e0ff"
      />
      <path
        d="M40 14H58V38H50V50H42V38H40V14Z"
        stroke="#1a1a2e"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect x="6" y="6" width="4" height="4" fill="white" />
      <rect x="54" y="54" width="4" height="4" fill="white" />
    </svg>
  );
}
