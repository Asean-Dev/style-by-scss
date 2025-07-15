import { Components, Theme } from "@mui/material/styles";

const MuiCrip: Components<Theme>["MuiChip"] = {
  /** **************************************
   * STYLE
   *************************************** */
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.main,
      fontWeight: 400,
      p: "10px 4px",
      m: 0,
      borderRadius: "10px",
      "& .MuiChip-label": {
        fontSize: "16px",
        fontWeight: 400,
      },
      "& .MuiChip-label-small": {
        fontSize: "12px",
        fontWeight: 400,
      },
    }),
  },
};

export const crip = { MuiCrip };
