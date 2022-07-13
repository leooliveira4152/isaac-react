import ThemeType from "./type";

export const Theme: ThemeType = {
  colors: {
    primary: { main: "#CCCCCC", light: "#FFFFFF", dark: "#999999" },
    secondary: { main: "#9E0039", light: "#ED145B", dark: "#7A0026" },
    background: { main: "#202020", light: "#2D2D2D", dark: "#111111" }
  },
  spacing: (number = 2) => `${number * 5}px`
};
