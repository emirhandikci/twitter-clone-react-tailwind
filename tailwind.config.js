/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#1DA1F2",
          dark: "#0979B8",
        },
        gray: {
          dark: "#657786",
          light: "#AAB8C2",
          lighter: "#E1E8ED",
          lightest: "#F5F8FA",
        },
        black: "#14171A"
      },
    },
    plugins: [],
  }
}
