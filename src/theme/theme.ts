import ThemeType from "./type";

export const Theme: ThemeType = {
  colors: {
    primary: { main: "#CCCCCC", light: "#FFFFFF", dark: "#999999" },
    secondary: { main: "#9E0039", light: "#ED145B", dark: "#7A0026" },
    background: { main: "#202020", light: "#2D2D2D", dark: "#111111" },
  },
  font: {
    family: { main: "Roboto" },
    weight: { main: 500, light: 300, bold: 700, bolder: 900 },
    size: { main: "16px", small: "12px", medium: "16px", large: "20px", largest: "35px" },
  },
  spacing: (number = 2) => `${number * 5}px`,
  opacity: (number = 1) => {
    const opacities = ["00", "1A", "33", "4D", "66", "80", "99", "B3", "CC", "E6", "FF"];
    const roundedNumber = Number(number.toFixed(1)) * 10;
    return roundedNumber >= opacities.length || roundedNumber < 0 ? opacities[10] : opacities[roundedNumber];
  },
};
