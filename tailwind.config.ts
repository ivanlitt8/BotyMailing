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
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#6218AB',
        secondary: '#FFAE5E', 
        accent: '#66BEFE', 
        salmon: '#FF6C7A', 
        promotion: '#FFEB3B',
        button: '#A58EFF', 
        buttonhover: '#8a6cec',
        textprimary: '#041B3E', 
        lightgray: '#D9D9D9', 
        background: '#F8F7FD',
      },
    },
  },
  plugins: [],
};
export default config;
