/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    remDivider: 16,
    pxToRemFontSize: () => {
      return Array.from(Array(101).keys()).reduce((acc, key) => {
        acc[key] = key;

        return acc;
      }, {});
    },
    pxToRemSpacing: () => {
      return Array.from(Array(1921).keys()).reduce((acc, key) => {
        acc[key] = key;

        return acc;
      }, {});
    },
    fontSize: ({ theme }) => {
      const values = theme("pxToRemFontSize");
      const remDivider = theme("remDivider");

      const utilities = Object.keys(values).reduce((acc, key) => {
        const value = parseFloat(values[key]);
        const remValue = `${value / remDivider}rem`;
        acc[key] = remValue;
        return acc;
      }, {});

      return utilities;
    },
    spacing: ({ theme }) => {
      const values = theme("pxToRemSpacing");
      const remDivider = theme("remDivider");

      const utilities = Object.keys(values).reduce((acc, key) => {
        const value = parseFloat(values[key]);
        const remValue = `${value / remDivider}rem`;
        acc[key] = remValue;
        return acc;
      }, {});

      return utilities;
    },
  },
};
