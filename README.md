# tailwindcss-container-fluid

[![NPM version](https://img.shields.io/npm/v/tailwindcss-container-fluid.svg)](https://www.npmjs.com/package/tailwindcss-container-fluid)
[![NPM monthly download](https://img.shields.io/npm/dm/tailwindcss-container-fluid.svg)](https://www.npmjs.com/package/tailwindcss-container-fluid)

> A plugin that makes a fluid container

## Installation

```bash
npm install -D tailwindcss-container-fluid
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [require('tailwindcss-container-fluid')({spacing: 3})],
};
```

## Usage

```html
<div class="container container-fluid "></div>
```

## License

MIT
