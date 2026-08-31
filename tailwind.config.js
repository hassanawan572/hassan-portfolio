/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A1220",
        panel: "#0F1B2E",
        border: "#1C2A3E",
        accent: "#22D3EE",
        accent2: "#67E8F9",
        ink: "#F3F4F8",
        muted: "#8B9AAE",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
