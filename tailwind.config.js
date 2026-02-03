/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nordic: {
          50: "#eef1f6",
          100: "#d9e0ea",
          200: "#b3c0d4",
          300: "#8da0bd",
          400: "#6780a7",
          500: "#4f6a90", // Primary
          600: "#3a516d",
          700: "#2a3b4e",
          800: "#1a252f",
          900: "#0d1216",
        },
        accent: {
          light: "#a7d9f7", // For highlights in light mode
          dark: "#60a5fa",  // For highlights in dark mode
        },
      },
      backgroundImage: {
        clear: "linear-gradient(to bottom, #d9e0ea, #a7d9f7)", // Light blue skies
        "dark-clear": "linear-gradient(to bottom, #1a252f, #3a516d)", // Dark moody skies
        clouds: "linear-gradient(to bottom, #eef1f6, #b3c0d4)", // Light gray clouds
        "dark-clouds": "linear-gradient(to bottom, #2a3b4e, #4f6a90)", // Dark gray clouds
        rain: "linear-gradient(to bottom, #b3c0d4, #6780a7)", // Muted rainy blues
        "dark-rain": "linear-gradient(to bottom, #1a252f, #2a3b4e)", // Deep rainy blues
        drizzle: "linear-gradient(to bottom, #d9e0ea, #b3c0d4)", // Lighter drizzle grays
        "dark-drizzle": "linear-gradient(to bottom, #2a3b4e, #3a516d)", // Darker drizzle grays
        thunder: "linear-gradient(to bottom, #8da0bd, #4f6a90)", // Stormy purples/blues
        "dark-thunder": "linear-gradient(to bottom, #0d1216, #1a252f)", // Very dark stormy
        snow: "linear-gradient(to bottom, #eef1f6, #d9e0ea)", // Snowy whites
        "dark-snow": "linear-gradient(to bottom, #3a516d, #4f6a90)", // Dark snowy blues
        mist: "linear-gradient(to bottom, #d9e0ea, #b3c0d4)", // Misty grays
        "dark-mist": "linear-gradient(to bottom, #2a3b4e, #3a516d)", // Dark misty grays
      },
    },
  },
  plugins: [],
};
