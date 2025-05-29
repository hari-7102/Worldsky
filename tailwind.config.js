// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        firstCardImage: "url('../assets/img4.jpeg')", // Double-check this path
      },
    },
  },
};
