"use strict";

const plugin = require("tailwindcss/plugin");

const colors = [
  "#6b7280",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#3b82f6",
  "#a855f7",
  "#ec4899",
  "#06b6d4",
];

module.exports = plugin(function ({ addComponents, theme }) {
  if (process.env.NODE_ENV === "production") {
    return;
  }

  const screens = theme("screens") || {};
  const screenEntries = Object.entries(screens);

  if (screenEntries.length === 0) {
    return;
  }

  const components = {
    "body::before": {
      content: `"${screenEntries[0][0].toUpperCase()}"`,
      position: "fixed",
      left: "0.5rem",
      top: "0.5rem",
      zIndex: "9999",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "1.75rem",
      height: "1.75rem",
      fontSize: "0.55rem",
      fontWeight: "600",
      color: "white",
      borderRadius: "9999px",
      backgroundColor: colors[0],
      pointerEvents: "none",
    },
  };

  for (const [index, entry] of screenEntries.entries()) {
    if (index === 0) {
      continue;
    }

    const [name, value] = entry;
    const mediaQuery = `@media (min-width: ${value})`;

    components[mediaQuery] = {
      "body::before": {
        backgroundColor: colors[index % colors.length],
        content: `"${name.toUpperCase()}"`,
      },
    };
  }

  addComponents(components);
});
