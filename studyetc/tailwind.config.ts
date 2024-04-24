import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        movetext: {
          "0%": { transform: "translateY(70%)" },
          "50%": { transform: "translateY(-40%)" },
          "75%": { transform: "translateY(20%)" },
          "100%": { transform: "translateY(0%)" },
        },
        movetextreverse: {
          "0%": { transform: "translateY(-70%)" },
          "50%": { transform: "translateY(40%)" },
          "75%": { transform: "translateY(-20%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        movetext: "moveText 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
