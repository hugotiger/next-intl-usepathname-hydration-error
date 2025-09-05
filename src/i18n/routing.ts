import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en-SE", "sv-SE"],
  defaultLocale: "en-SE",
  localePrefix: {
    mode: "always",
    prefixes: {
      "en-SE": "/en",
      "sv-SE": "/sv",
    },
  },
});
