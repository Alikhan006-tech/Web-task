import { useEffect, useRef, useState } from "react";

export default function DonutChart({ value, label }) {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  const size = 200;        // 🔥 BIG
  const stroke = 14;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
    ref={ref}
    className="flex flex-col items-center justify-center
               transition-transform duration-300 hover:scale-105"
  >
      {/* DONUT */}
      <div className="relative w-[200px] h-[200px]">
        <svg width={size} height={size}>
          {/* background ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={stroke}
            fill="none"
          />

          {/* progress ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={animate ? offset : circumference}
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* 🔥 PERFECTLY CENTERED TEXT */}
        <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
          {value}%
        </div>
      </div>

      {/* LABEL */}
      <p className="mt-5 text-xl font-bold text-center tracking-wide">
        {label}
      </p>
    </div>
  );
}
