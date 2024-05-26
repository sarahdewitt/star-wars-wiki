import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      blue: {
        "100": "#7997C4",
        "200": "#01204E",
        "300": "#160041",
        "400": "#190F2F",
        "500": "#0C041C",
      },
      white: "#FFFFFF",
    },
    fontFamily: {
      poppins: "Poppins, sans-serif",
      orbitron: "Orbitron, sans-serif",
    },
  },
  plugins: [],
};
export default config;
