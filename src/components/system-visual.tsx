"use client";
import { useState } from "react";
const concepts = [
  { title: "انسان", english: "HUMAN", detail: "انگیزه، توجه، یادگیری، عادت" },
  { title: "سیستم", english: "SYSTEM", detail: "فرایند، شاخص، ابزار، محیط" },
  { title: "مسئله", english: "PROBLEM", detail: "تعریف دقیق، شواهد، فرضیه" },
  { title: "بازی", english: "PLAY", detail: "تجربه، چالش، بازخورد، تعامل" },
];
export function SystemVisual({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(0);
  return (
    <div className={`system-visual ${compact ? "compact" : ""}`}>
      <div className="visual-coordinate" dir="ltr">
        SHILOO / BEHAVIORAL ARCHITECTURE<span>FIG. 01</span>
      </div>
      <div className={`orbital-art active-${active}`} aria-hidden="true">
        <svg viewBox="0 0 600 560" fill="none" className="orbital-svg">
          <defs>
            <linearGradient
              id={compact ? "plate-c" : "plate"}
              x1="120"
              y1="90"
              x2="430"
              y2="480"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#71918a" />
              <stop offset=".46" stopColor="#285c61" />
              <stop offset="1" stopColor="#143c41" />
            </linearGradient>
            <radialGradient
              id={compact ? "sphere-c" : "sphere"}
              cx=".3"
              cy=".2"
              r=".8"
            >
              <stop stopColor="#f2e8d2" />
              <stop offset=".42" stopColor="#c5a671" />
              <stop offset="1" stopColor="#806340" />
            </radialGradient>
            <filter
              id={compact ? "shadow-c" : "shadow"}
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="13" />
            </filter>
          </defs>
          <path
            d="M54 278H548M301 28V512"
            stroke="#285c61"
            strokeOpacity=".11"
            strokeDasharray="3 7"
          />
          <ellipse
            cx="302"
            cy="470"
            rx="174"
            ry="28"
            fill="#285c61"
            opacity=".12"
            filter={`url(#${compact ? "shadow-c" : "shadow"})`}
          />
          <g className="art-bottom">
            <ellipse
              cx="300"
              cy="350"
              rx="213"
              ry="98"
              transform="rotate(-24 300 350)"
              fill="#e6e9e1"
              stroke="#a5b7ab"
              strokeWidth=".7"
            />
            {Array.from({ length: 9 }, (_, i) => (
              <ellipse
                key={i}
                cx="300"
                cy="350"
                rx={192 - i * 13}
                ry={88 - i * 6}
                transform="rotate(-24 300 350)"
                stroke="#819c8e"
                strokeWidth=".7"
                opacity=".6"
              />
            ))}
          </g>
          <g className="art-middle">
            <ellipse
              cx="300"
              cy="286"
              rx="210"
              ry="94"
              transform="rotate(-24 300 286)"
              fill={`url(#${compact ? "plate-c" : "plate"})`}
            />
            {Array.from({ length: 17 }, (_, i) => (
              <ellipse
                key={i}
                cx="300"
                cy="286"
                rx={204 - i * 8}
                ry={91 - i * 3.6}
                transform="rotate(-24 300 286)"
                stroke="#b2c9b7"
                strokeWidth=".65"
                opacity={0.46 - i * 0.015}
              />
            ))}
          </g>
          <g className="art-top">
            <ellipse
              cx="300"
              cy="214"
              rx="202"
              ry="89"
              transform="rotate(-24 300 214)"
              fill="#f5f2e8"
              fillOpacity=".63"
              stroke="#b89865"
              strokeWidth="1"
            />
            {Array.from({ length: 10 }, (_, i) => (
              <ellipse
                key={i}
                cx="300"
                cy="214"
                rx={184 - i * 13}
                ry={81 - i * 5.7}
                transform="rotate(-24 300 214)"
                stroke="#b89865"
                strokeWidth=".65"
                opacity=".45"
              />
            ))}
          </g>
          <path
            d="M120 350V233M478 212V335M300 158V363"
            stroke="#9fae9b"
            strokeDasharray="3 5"
            strokeWidth="1"
          />
          <ellipse
            cx="300"
            cy="184"
            rx="29"
            ry="12"
            fill="#283f39"
            opacity=".12"
          />
          <circle
            className="art-sphere"
            cx="300"
            cy="145"
            r="31"
            fill={`url(#${compact ? "sphere-c" : "sphere"})`}
          />
          <circle cx="120" cy="233" r="5" fill="#b89865" />
          <circle cx="478" cy="335" r="5" fill="#285c61" />
          <path
            d="M120 233H65V193M478 335H544V374"
            stroke="#9eaf9e"
            strokeWidth=".8"
          />
          <circle cx="65" cy="188" r="3" stroke="#9eaf9e" />
          <circle cx="544" cy="380" r="3" stroke="#9eaf9e" />
          <path d="M42 70h12m-6-6v12M548 455h12m-6-6v12" stroke="#b89865" />
        </svg>
        <span className="art-label label-top">
          از پیچیدگی به وضوح<span>FROM COMPLEXITY TO CLARITY</span>
        </span>
        <span className="art-label label-bottom">هر لایه، یک نگاه تازه</span>
      </div>
      <div className="concept-selector" aria-label="لایه‌های مدل شیلو">
        {concepts.map((concept, index) => (
          <button
            key={concept.english}
            type="button"
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
            aria-pressed={active === index}
            className={active === index ? "active" : ""}
          >
            <span>{concept.title}</span>
            <small>{concept.english}</small>
            {index < 3 && <i aria-hidden="true">×</i>}
          </button>
        ))}
      </div>
      <p className="concept-detail" aria-live="polite">
        {concepts[active].detail}
      </p>
    </div>
  );
}
