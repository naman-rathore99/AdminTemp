import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundGImage: {
        "primary-gradient":
          "linear-gradient(270deg, #81703D 0%, #C8B586 50.5%, #837240 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;