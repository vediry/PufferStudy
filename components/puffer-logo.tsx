export function PufferLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="17" r="10.5" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <line x1="16" y1="3.5" x2="16" y2="7" />
        <line x1="6.5" y1="9.5" x2="9.5" y2="11.5" />
        <line x1="25.5" y1="9.5" x2="22.5" y2="11.5" />
        <line x1="3.5" y1="20" x2="6.5" y2="20" />
        <line x1="28.5" y1="20" x2="25.5" y2="20" />
      </g>
      <circle cx="13" cy="15.5" r="1.6" fill="#fff" />
      <circle cx="13.4" cy="15.7" r="0.7" fill="#0F0F11" />
      <path d="M18.5 19.5 Q20.5 21 18.8 22" stroke="#0F0F11" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}
