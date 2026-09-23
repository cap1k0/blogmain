export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
        <defs>
          <linearGradient id="brucaGrad" x1="0" y1="0" x2="26" y2="26">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="100%" stopColor="#ff2bd6" />
          </linearGradient>
        </defs>
        <circle cx="13" cy="13" r="10" fill="url(#brucaGrad)" />
        <ellipse
          cx="13"
          cy="13"
          rx="12"
          ry="4"
          fill="none"
          stroke="url(#brucaGrad)"
          strokeWidth={1.5}
          transform="rotate(-18 13 13)"
        />
      </svg>
      <span className="text-lg font-medium text-white">Bruca</span>
    </div>
  );
}
