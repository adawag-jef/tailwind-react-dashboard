import { useMediaQuery } from "react-responsive";

import resolveConfig from "tailwindcss/resolveConfig";
// const tailwindConfig = require("../../tailwind.config");
const Tailwind = {
  themes: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
};
export default function useBreakpoint(breakpoint) {
  return useMediaQuery({
    query: `(min-width: ${Tailwind.themes.screens[breakpoint]})`,
  });
}
