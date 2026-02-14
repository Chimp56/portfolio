/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
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
      },
      animation: {
        "loader-spin": "loader-spin 1s linear infinite",
        "loader-bounce": "loader-bounce 0.6s ease-in-out infinite alternate",
        "orb-float": "orb-float 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
