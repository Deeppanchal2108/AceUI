module.exports = {
    theme: {
        extend: {
            fontFamily: {
               sans: [ "var(--font-dm-sans)", "sans-serif"],
               jost: ["var(--font-jost-sans)", "sans-serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
  };