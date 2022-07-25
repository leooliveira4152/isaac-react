type ColorTypes = {
  main: string;
  light: string;
  dark: string;
};

interface Colors {
  primary: ColorTypes;
  secondary: ColorTypes;
  background: ColorTypes;
}

interface Font {
  family: { main: string; secondary?: string };
  weight: { main: number; light: number; bold: number; bolder: number };
  size: { main: string; small: string; medium: string; large: string; largest: string };
}

export default interface ThemeType {
  colors: Colors;
  font: Font;
  spacing: (number?: number) => string;
  opacity: (number?: number) => string;
}
