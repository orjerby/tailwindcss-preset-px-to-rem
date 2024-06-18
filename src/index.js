/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    remDivider: 16,
    fontSizeLimit: 100,
    spacingLimit: 1920,
    borderRadiusLimit: 50,
    fontSize: ({ theme }) => {
      const remDivider = theme("remDivider");
      const fontSizeLimit = theme("fontSizeLimit");
      const sizes = {};
      for (let i = 1; i <= fontSizeLimit; i++) {
        sizes[`${i}`] = `${i / remDivider}rem`;
      }
      return sizes;
    },
    spacing: ({ theme }) => {
      const remDivider = theme("remDivider");
      const spacingLimit = theme("spacingLimit");
      const sizes = {};
      for (let i = 1; i <= spacingLimit; i++) {
        sizes[`${i}`] = `${i / remDivider}rem`;
      }
      return sizes;
    },
    borderRadius: ({ theme }) => {
      const remDivider = theme("remDivider");
      const borderRadiusLimit = theme("borderRadiusLimit");
      const sizes = {};
      for (let i = 1; i <= borderRadiusLimit; i++) {
        sizes[`${i}`] = `${i / remDivider}rem`;
      }
      return sizes;
    },
  },
};
