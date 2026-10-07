import { useId } from "react";

export default function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const lg = size === "lg";
  const uid = "hb" + useId().replace(/:/g, "");

  return (
    <span className="inline-flex items-center gap-2 font-display pl-2">
      <svg
        viewBox="18 14 176 132"
        className={lg ? "h-20 w-auto" : "h-8 w-auto"}
        role="img"
        aria-label="HB"
      >
        <defs>
          <linearGradient
            id={`${uid}h`}
            gradientUnits="userSpaceOnUse"
            x1="30"
            y1="20"
            x2="95"
            y2="140"
          >
            <stop offset="0" stopColor="#b79cff" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient
            id={`${uid}b`}
            gradientUnits="userSpaceOnUse"
            x1="110"
            y1="20"
            x2="186"
            y2="140"
          >
            <stop offset="0" stopColor="#9b5cf6" />
            <stop offset="1" stopColor="#4c1d95" />
          </linearGradient>
        </defs>

        {/* H */}
        <path
          d="M36 24V136M84 24V136"
          fill="none"
          stroke={`url(#${uid}h)`}
          strokeWidth="16"
        />
        <path d="M44 82L76 64V88L44 106Z" fill={`url(#${uid}h)`} />

        {/* B */}
        <path
          d="M116 24V136M116 32H146Q170 32 170 56Q170 80 146 80H116M116 80H150Q178 80 178 104Q178 128 150 128H116"
          fill="none"
          stroke={`url(#${uid}b)`}
          strokeWidth="16"
          strokeMiterlimit="10"
        />
      </svg>
      {/* <span className={lg ? "text-4xl" : "text-lg"}>
        <b className="font-extrabold">Haris</b>{" "}
        <span className="font-medium opacity-80">Builds</span>
      </span> */}
    </span>
  );
}
