import { useEffect, useRef, useState } from "react";

export default function ProgressBar({ label, value }) {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

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
    <div ref={ref} className="w-full max-w-md">
      <div className="flex justify-between mb-2 text-sm font-medium">
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg reed-500 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${value}%` : "0%",
          }}
        />
      </div>
    </div>
  );
}
