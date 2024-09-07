/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        saudi: "#016C35",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};