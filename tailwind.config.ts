import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "background: linear-gradient(204.37deg, rgba(234, 91, 11, 0.12) 27.11%, #FFE7E8 94.65%);",
      },

      colors: {
        primary: "#2F2B3DE5",
        PrimaryOrange: "#EA5B0B",
        warningOpacityLight: "#FF9F4329",
        secondary: "#2F2B3DB2",
        offWhite: "#F7F9FC",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
export default config;
