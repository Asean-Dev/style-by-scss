import { Components, Theme } from "@mui/material/styles";

const MuiDivider: Components<Theme>["MuiDivider"] = {
  styleOverrides: {
    root: {
      borderColor: "#E5D1A7",
    },
  },
};

export const divider = { MuiDivider };
