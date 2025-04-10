/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      bg_primary: "#E3F6F5",
      bg_white: "#ffffff",
      dark: "#272343",
      light: "#ffffff",
      blue: "#0AADBF",
      pink: "#F107BA",
      gray: "#C6C4C7",
    },
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", "sans-serif"],
        noto: ["var(--font-noto-sans-jp)", "sans-serif"],
      },
      spacing: {
        128: "8rem",
        256: "16rem",
      },
      borderRadius: {
        4: "4px",
        8: "8px",
        22: "22px",
      },
      keyframes: {
        sway: {
          "0%, 100%": { transform: "rotate(30deg)" },
          "50%": { transform: "rotate(-15deg)" },
        },
        float: {
          "0%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(-10%)" },
          "100%": { transform: "translateY(10%)" },
        },
      },
      animation: {
        sway: "sway 2s ease-in-out infinite",
        float: "float 1.8s ease-in-out infinite alternate-reverse",
      },
    },
  },
  plugins: [],
};
