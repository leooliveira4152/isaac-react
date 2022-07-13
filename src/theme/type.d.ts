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

export default interface ThemeType {
  colors: Colors;
  spacing: (number: number | undefined) => string;
}
