const OUTLINE =
  "M 110 285 C 100 200, 170 120, 270 95 C 370 70, 500 65, 590 100 C 670 130, 720 200, 722 275 C 724 330, 690 362, 640 368 C 600 372, 575 368, 545 378 C 515 388, 480 392, 450 388 C 420 396, 390 410, 350 418 C 310 424, 270 415, 250 392 C 235 375, 235 355, 215 350 C 185 346, 135 335, 110 285 Z";
const P: [number, number][] = [[190, 235], [300, 150], [430, 125], [560, 150], [650, 250], [540, 300], [420, 255], [330, 320], [600, 420], [490, 470]];
const E: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0], [1, 6], [2, 6], [3, 5], [6, 9], [5, 8], [8, 9]];

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="36" height="26" viewBox="80 50 660 470" aria-hidden="true">
        <defs>
          <linearGradient id="brucaGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="100%" stopColor="#ff2bd6" />
          </linearGradient>
        </defs>
        <path d={OUTLINE} fill="none" stroke="url(#brucaGrad)" strokeWidth={26} strokeLinejoin="round" />
        {E.map(([a, b], i) => (
          <line key={i} x1={P[a][0]} y1={P[a][1]} x2={P[b][0]} y2={P[b][1]} stroke="url(#brucaGrad)" strokeWidth={14} strokeOpacity={0.7} />
        ))}
        {P.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={26} fill="url(#brucaGrad)">
            <animate attributeName="opacity" values="1;0.35;1" dur="3s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
      <span className="text-lg font-medium text-white">Bruca</span>
    </div>
  );
}
