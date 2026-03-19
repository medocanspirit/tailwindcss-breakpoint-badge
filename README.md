![tailwindcss-breakpoint-badge banner](./assets/banner.png)

# Tailwindcss Breakpoint Badge

A simple Tailwind CSS plugin that displays the active breakpoint in a floating badge.

Tailwindcss Breakpoint Badge uses the values defined in `theme.screens` to generate the labels, and does nothing if no screens are configured.\
Will be disabled automatically when `NODE_ENV === "production"`,

## Install

Install from GitHub:

```bash
npm install github:YOUR_GITHUB_USERNAME/tailwindcss-breakpoint-badge
```

Later, if you publish to npm:

```bash
npm install tailwindcss-breakpoint-badge
```

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
