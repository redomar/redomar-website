import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        "univers": ["var(--font-univers)", ...fontFamily.sans],
        "univers-condensed": ["var(--font-univers-condensed)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
