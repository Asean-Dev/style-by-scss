declare module "@mui/material/styles" {
  interface TypeText {
    dark: string;
    yellow: string;
    light: string;
    disabled: string;
    secondary: string;
    primary: string;
    white: string;
    black: string;
  }
  interface ThemeVars {
    shadow: {
      image: string;
    };
  }
}

export const themePalette = {
  // primary
  primary: {
    light: "#404db4", // --color-primary-light
    main: "#121D77", // --color-primary
    dark: "#121D57", // --color-primary-dark
  },
  // secondary
  secondary: {
    light: "#FFE70C", // --color-secondary-light
    main: "#FFC300", // --color-secondary
    dark: "#B18F30", // --color-secondary-dark
  },
  // error
  error: {
    light: "#ff2626", // --color-error-light
    main: "#f00", // --color-error
    dark: "#da0000", // --color-error-dark
  },
  // warning
  warning: {
    light: "#ff6c6d", // --color-warning-light
    main: "#ec4546", // --color-warning
    dark: "#c43839", // --color-warning-dark
  },
  // success
  success: {
    light: "#50ffa0", // --color-success-light
    main: "#00e066", // --color-success
    dark: "#00b552", // --color-success-dark
  },
  // info
  info: {
    light: "#566676", // --color-gray
    main: "#666", // --color-default
    dark: "#333", // --color-dark
  },
  // common
  common: {
    black: "#000", // --color-black
    white: "#fff", // --color-light
  },
  text: {
    dark: "#010202",
    light: "#ffffff",
    primary: "#121D77",
    secondary: "#666",
    disabled: "#9C9C9C",
    yellow: "#FFC300",
  },
};
