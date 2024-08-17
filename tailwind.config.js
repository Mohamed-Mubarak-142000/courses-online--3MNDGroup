/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FCD980",
        secondary: "#1C1E53",
        tertiary: "#2405F2",
        primary_text: "#FFFFFF",
        secondary_text: "#F4F6FC",
        text_dark: "#282938",
        bg_block: "#EEF4FA",
      },
    },
  },
  plugins: [],
};
