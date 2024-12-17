/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blueish: {
          DEFAULT: "hsl(var(--blueish))",
        },
        greenish: {
          DEFAULT: "hsl(var(--greenish))",
        },
        purpleish: {
          DEFAULT: "hsl(var(--purpleish))",
        },
        pinkish: {
          DEFAULT: "hsl(var(--pinkish))",
        },
        pinkish2: {
          DEFAULT: "hsl(var(--pinkish2))",
        },
        pinkish3: {
          DEFAULT: "hsl(var(--pinkish3))",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        custom2: ["Butler2", "montserrat"],
      },
    },
  },
  plugins: [],
};
