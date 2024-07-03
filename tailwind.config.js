/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#1E3A8A",
        customGreen: "rgb(34, 197, 94)",
      },
    },
  },
  plugins: [require("daisyui")],
};
