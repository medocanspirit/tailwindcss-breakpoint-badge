![tailwindcss-breakpoint-badge banner](./assets/banner.png)

# Tailwindcss Breakpoint Badge

A simple Tailwind CSS plugin that displays the active breakpoint in a floating badge.

It uses the values defined in `theme.screens` to generate the labels, quietly does nothing if no screens are configured, and is automatically disabled when `NODE_ENV === "production"`.

## Install

```bash
npm install tailwindcss-breakpoint-badge
```

Package: [tailwindcss-breakpoint-badge](https://www.npmjs.com/package/tailwindcss-breakpoint-badge)

## Usage

Add the plugin to your Tailwind config:

```js
const breakpointBadge = require("tailwindcss-breakpoint-badge");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [breakpointBadge],
};
```

For TypeScript or ESM configs:

```ts
import breakpointBadge from "tailwindcss-breakpoint-badge";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [breakpointBadge],
};
```

## License

MIT
