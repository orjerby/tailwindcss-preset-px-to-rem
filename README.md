<div align="center">
  <img src="https://raw.githubusercontent.com/maizzle/tailwindcss-preset-email/HEAD/.github/tailwindcss-mark.svg" alt="Tailwind CSS" width="108" height="66">
  <h1>Tailwind CSS Px To Rem Preset</h1>
</div>

## About

A Tailwind CSS preset that automates the conversion of pixel values to rem units.\
Enhance your responsive design workflow with customizable rem dividers and easy integration into your Tailwind CSS configuration.

## Installation

```bash
npm i tailwindcss-preset-px-to-rem
```

## Usage

```js
// tailwind.config.js
module.exports = {
  presets: [require("tailwindcss-preset-px-to-rem")],
};
```

As an example, the classes applied below become available right away.\
Those classes will convert from px to rem.

```html
<div class="mt-25 p-15 max-w-640">
  <h1 class="text-28">...</h1>
  <p class="text-20">...</p>
  <p class="text-17">...</p>
</div>
```

## Configuration

You can configure some options by using those properties in `theme` object:

- remDivider (default - 20)
- fontSizeLimit (default - 100)
- spacingLimit (default - 1920)
- borderRadiusLimit (default - 500)

```js
// tailwind.config.js
theme: {
  remDivider: 20,
  fontSizeLimit: 50,
  spacingLimit: 100,
  borderRadiusLimit: 30
}
```
