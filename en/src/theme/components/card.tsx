import { Components, Theme } from "@mui/material/styles";

const MuiCard: Components<Theme>["MuiCard"] = {
  /** **************************************
   * STYLE
   *************************************** */
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const baseStyles = {
        boxShadow: "24px 24px 80px 0px rgba(109, 109, 109, 0.16)",
        borderRadius: "30px",
        backgroundColor: "#ffffff",
      };

      const hoverStyles = ownerState?.enableHoverUnderline
        ? {
            "&:hover": {
              ".MuiTypography-root": {
                textDecoration: "underline",
              },
            },
          }
        : {};

      return { ...baseStyles, ...hoverStyles };
    },
  },
};

export const card = { MuiCard };
