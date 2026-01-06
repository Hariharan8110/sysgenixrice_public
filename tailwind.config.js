/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primarycolor: "#305CDE",
        secondaryColor: "#FFFFFF",
        adprimarycolor: "#F7931E",
        adseccolor: "#F7931E",
      },
      fontFamily: {
        title: ["var(--font-lora)"],
        heading: ["var(--font-roboto)"],
        description: ["var(--font-roboto)"],
        banner: ["var(--font-roboto)"],
        adtitle: ["var(--font-roboto)"],
        adheading: ["var(--font-roboto)"],
        addescription: ["var(--font-roboto)"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
