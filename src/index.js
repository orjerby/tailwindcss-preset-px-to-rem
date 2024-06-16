/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    remDivider: 16,
    fontSize: ({ theme }) => {
      const remDivider = theme("remDivider");
      const sizes = {};
      for (let i = 1; i <= 100; i++) {
        sizes[`${i}`] = `${i / remDivider}rem`;
      }
      return sizes;
    },
    spacing: ({ theme }) => {
      const remDivider = theme("remDivider");
      const sizes = {};
      for (let i = 1; i <= 1920; i++) {
        sizes[`${i}`] = `${i / remDivider}rem`;
      }
      return sizes;
    },
  },
};
