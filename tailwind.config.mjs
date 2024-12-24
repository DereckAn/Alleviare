/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        greenish: {
          DEFAULT: "hsl(var(--greenish))",
        },
        purpleish: {
          DEFAULT: "hsl(var(--purpleish))",
        },
        purpleishLight: {
          DEFAULT: "hsl(var(--purpleishLight))",
        },
        pinkish: {
          DEFAULT: "hsl(var(--pinkish))",
        },
        vainillaClaro: {
          DEFAULT: "hsl(var(--vainilla))",
        },
        vainilla: {
          DEFAULT: "hsl(var(--vainilla))",
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
