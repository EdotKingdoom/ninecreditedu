import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EAF0F8",
          100: "#D0DDF0",
          200: "#A1BBE1",
          300: "#7299D2",
          400: "#4377C3",
          500: "#1F4E79",
          600: "#193F61",
          700: "#132F49",
          800: "#0D2031",
          900: "#061018",
        },
        gold: {
          50: "#FDF8F0",
          100: "#FAEDD9",
          200: "#F5DBB3",
          300: "#F0C98D",
          400: "#EBB767",
          500: "#D4A574",
          550: "#C49B6A",
          600: "#B08850",
          700: "#8C6B40",
          800: "#694E30",
          900: "#463120",
        },
      },
      fontFamily: {
        sans: ["PingFang SC", "Microsoft YaHei", "sans-serif"],
        heading: ["PingFang SC", "Microsoft YaHei", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config
