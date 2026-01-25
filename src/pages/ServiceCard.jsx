import { useState } from "react";

export default function ServiceCard({ icon, title, description }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-[400px] [perspective:1000px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`
          relative h-full w-full
          transition-transform duration-700
          [transform-style:preserve-3d]
          ${flipped ? "rotate-y-180 scale-105" : ""}
        `}
      >
        {/* FRONT */}
        <div
          className="
            absolute inset-0
            flex flex-col items-center justify-center
            rounded-2xl bg-white p-5
            shadow-lg
            [backface-visibility:hidden]
          "
        >
          <img
            src={icon}
            alt={title}
            className="h-[65%] w-full rounded-xl object-cover mb-4"
          />
          <h3 className="text-[22px] font-bold tracking-wide">
            {title}
          </h3>
        </div>

        {/* BACK */}
        <div
          className="
            absolute inset-0
            flex flex-col items-center justify-center
            rounded-2xl bg-blue-600 p-5 text-white text-center
            shadow-xl
            rotate-y-180
            [backface-visibility:hidden]
          "
        >
          <img
            src={icon}
            alt={title}
            className="h-[65%] w-full rounded-xl object-cover mb-4"
          />
          <h3 className="text-[22px] font-bold tracking-wide mb-3">
            {title}
          </h3>

          {flipped && (
            <p key={Date.now()} className="typewriter">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
