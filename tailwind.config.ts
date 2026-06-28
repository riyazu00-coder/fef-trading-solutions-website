import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070d",
        midnight: "#07111f",
        panel: "#0b1220",
        line: "#1b2a40",
        steel: "#9aa8bb",
        electric: "#1da8ff",
        cyan: "#19d3d0",
        emerald: "#19d787",
        metal: "#d6dde8"
      },
      boxShadow: {
        glow: "0 0 38px rgba(29, 168, 255, 0.22)",
        emerald: "0 0 34px rgba(25, 215, 135, 0.2)"
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #1da8ff 0%, #19d3d0 48%, #19d787 100%)",
        "metal-line": "linear-gradient(90deg, rgba(255,255,255,0.8), rgba(154,168,187,0.26), rgba(255,255,255,0.62))"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        scan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" }
        },
        pathFlow: {
          "0%": { strokeDashoffset: "180" },
          "100%": { strokeDashoffset: "0" }
        },
        tradePacket: {
          "0%": { opacity: "0", transform: "translateX(0) scale(0.8)" },
          "15%": { opacity: "1" },
          "85%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateX(100%) scale(1)" }
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        scan: "scan 3.4s linear infinite",
        pulseSoft: "pulseSoft 2.6s ease-in-out infinite",
        pathFlow: "pathFlow 1.15s ease-out forwards",
        tradePacket: "tradePacket 1.25s ease-in-out forwards"
      }
    }
  },
  plugins: []
};

export default config;
