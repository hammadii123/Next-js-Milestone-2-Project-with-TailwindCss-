/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a202c", // Dark theme for backgrounds
        accent: "#4a5568", // Accent color for sections
        textPrimary: "#edf2f7", // Light text color
      },
    },
  },
  plugins: [],
};
