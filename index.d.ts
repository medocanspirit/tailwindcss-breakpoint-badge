import type { Config, PluginCreator } from "tailwindcss/types/config";

declare const breakpointBadge: {
  handler: PluginCreator;
  config?: Partial<Config>;
};

export = breakpointBadge;
