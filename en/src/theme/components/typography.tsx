import { Components, Theme } from "@mui/material/styles";
const MuiTypography: Components<Theme>["MuiTypography"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.text.dark,
      zIndex: 100,
    }),
  },
};

export const typography = { MuiTypography };
