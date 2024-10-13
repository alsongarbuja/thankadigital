/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_red: "#E8343E",
        primary_blue: "#333D79",
        primary: "#E8343E",
        secondary: "#333D79",
        neutral_white: "#FFFFFF",
        neutral_black: "#212529",
        background_lightblue: "#E9EBF6",
        background_gray: "#F3F5F9",
        footer_thanka: "#C2C7E5",
        filter_btn: "#3F3D56",
      },
      fontFamily: {
        dm: ["var(--font-dm-sans)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
        josefin: ["var(--font-josefin-sans)", "sans-serif"],
        lato: ["var(--font-lato)", "sans"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        parallax: 'url("/images/footer.png")',
      },
      animation: {
        "bg-shine": "bg-shine 2.1s linear infinite",
      },
      keyframes: {
        "bg-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [],
};
