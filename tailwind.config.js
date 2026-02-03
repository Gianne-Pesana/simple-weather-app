/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        clear: "linear-gradient(to bottom, #fef9c3, #60a5fa)",
        "dark-clear": "linear-gradient(to bottom, #4a4e69, #22223b)",
        clouds: "linear-gradient(to bottom, #e5e7eb, #6b7280)",
        "dark-clouds": "linear-gradient(to bottom, #6b7280, #1f2937)",
        rain: "linear-gradient(to bottom, #93c5fd, #1e3a8a)",
        "dark-rain": "linear-gradient(to bottom, #4a4e69, #1e3a8a)",
        drizzle: "linear-gradient(to bottom, #cbd5e1, #64748b)",
        "dark-drizzle": "linear-gradient(to bottom, #64748b, #1f2937)",
        thunder: "linear-gradient(to bottom, #a78bfa, #1f2937)",
        "dark-thunder": "linear-gradient(to bottom, #4a044e, #1f2937)",
        snow: "linear-gradient(to bottom, #f8fafc, #93c5fd)",
        "dark-snow": "linear-gradient(to bottom, #6b7280, #1e3a8a)",
        mist: "linear-gradient(to bottom, #e2e8f0, #94a3b8)",
        "dark-mist": "linear-gradient(to bottom, #64748b, #1f2937)",
      },
    },
  },
  plugins: [],
};
