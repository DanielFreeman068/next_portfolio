/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        typing: "typing 2s steps(40, end) forwards",
        blink: "blink 0.7s infinite",
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "99.9%": { borderRight: "2px solid orange" },
          "100%": { width: "8.5em", borderRight: "none" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        courier: ['Courier', 'monospace'],
        segoe: ['"Segoe UI"', '"Arial"', '"Helvetica Neue"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
