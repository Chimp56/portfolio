/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "DM Sans fallback", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "JetBrains Mono fallback", "monospace"],
      },
      colors: {
        accent: {
          DEFAULT: "#2563eb",
          hover: "#1d4ed8",
        },
      },
      keyframes: {
        "loader-spin": { to: { transform: "rotate(360deg)" } },
        "loader-bounce": { to: { transform: "scaleY(0.4)" } },
        "orb-float": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(20px, -20px)" },
          "66%": { transform: "translate(-15px, 15px)" },
        },
        "blob-1": {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
        "blob-2": {
          "0%, 100%": { borderRadius: "40% 60% 60% 40% / 70% 30% 70% 30%" },
          "50%": { borderRadius: "70% 30% 30% 70% / 40% 70% 60% 50%" },
        },
        "blob-3": {
          "0%, 100%": { borderRadius: "50% 50% 30% 70% / 50% 30% 70% 50%" },
          "50%": { borderRadius: "30% 70% 70% 30% / 30% 50% 50% 70%" },
        },
        "blob-4": {
          "0%, 100%": { borderRadius: "70% 30% 50% 50% / 30% 70% 30% 70%" },
          "50%": { borderRadius: "40% 60% 40% 60% / 70% 40% 60% 40%" },
        },
        "orb-wander": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(30px, -40px) scale(1.05)" },
          "50%": { transform: "translate(-20px, 25px) scale(0.95)" },
          "75%": { transform: "translate(15px, 35px) scale(1.02)" },
        },
      },
      animation: {
        "loader-spin": "loader-spin 1s linear infinite",
        "loader-bounce": "loader-bounce 0.6s ease-in-out infinite alternate",
        "orb-float": "orb-float 12s ease-in-out infinite",
        "blob-1": "blob-1 8s ease-in-out infinite",
        "blob-2": "blob-2 10s ease-in-out infinite",
        "blob-3": "blob-3 9s ease-in-out infinite",
        "blob-4": "blob-4 11s ease-in-out infinite",
        "orb-wander": "orb-wander 15s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
