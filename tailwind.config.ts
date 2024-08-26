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
        primary: '#3A00A5',
        btnprimary: '#5B57E5',
        secondary: '#FFAE5E', 
        iconbg:"#9B7AF8",
        accent: '#66BEFE', 
        salmon: '#FF6C7A', 
        promotion: '#FFEB3B',
        button: '#A58EFF', 
        buttonhover: '#8a6cec',
        textprimary: '#041B3E', 
        lightgray: '#D9D9D9', 
        background: '#F8F7FD',
      },
      // screens: {
      //   'xs': '480px',
      //   'sm': '640px',   
      //   'md': '768px',   
      //   'lg': '1024px',  
      //   'xl': '1280px',  
      //   '2xl': '1536px',
      // },
    },
  },
  plugins: [],
};
export default config;
