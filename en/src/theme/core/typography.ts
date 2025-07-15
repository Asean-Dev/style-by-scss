import type { TypographyVariantsOptions } from "@mui/material/styles";

import { pxToRem, responsiveFontSizes } from "../utils";
import { Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    fontSecondaryFamily: React.CSSProperties["fontFamily"];
    fontWeightSemiBold: React.CSSProperties["fontWeight"];
  }
  interface TypographyVariantsOptions {
    fontSecondaryFamily?: React.CSSProperties["fontFamily"];
    fontWeightSemiBold?: React.CSSProperties["fontWeight"];
  }
  interface ThemeVars {
    typography: Theme["typography"];
  }
}

const primaryFont = "var(--font-noto-thai)";
const secondaryFont = "var(--font-noto-thai)";

export const typography: TypographyVariantsOptions = {
  fontFamily: primaryFont,
  fontSecondaryFamily: secondaryFont,
  fontWeightLight: "300",
  fontWeightRegular: "400",
  fontWeightMedium: "500",
  fontWeightSemiBold: "600",
  fontWeightBold: "700",
  h1: {
    fontWeight: 800,
    lineHeight: 1,
    fontSize: pxToRem(36),
    fontFamily: primaryFont,
    ...responsiveFontSizes({
      md: 26,
      lg: 28,
      xl: 30,
      xl2: 32,
      xl3: 34,
    }),
  },
  h2: {
    fontWeight: 800,
    lineHeight: 1,
    fontSize: pxToRem(28),
    fontFamily: primaryFont,
    ...responsiveFontSizes({
      md: 24,
      lg: 26,
      xl: 26,
      xl2: 28,
      xl3: 28,
    }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1,
    fontSize: pxToRem(26),
    fontFamily: primaryFont,
    ...responsiveFontSizes({
      md: 22,
      lg: 26,
      xl: 26,
      xl2: 26,
      xl3: 26,
    }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1,
    fontSize: pxToRem(24),
    fontFamily: primaryFont,
    ...responsiveFontSizes({
      md: 20,
      lg: 22,
      xl: 22,
      xl2: 24,
      xl3: 24,
    }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1,
    fontSize: pxToRem(20),
    fontFamily: primaryFont,
    ...responsiveFontSizes({
      md: 18,
      lg: 20,
      xl: 20,
      xl2: 20,
      xl3: 20,
    }),
  },
  h6: {
    fontWeight: 600,
    lineHeight: 1,
    fontSize: pxToRem(18),
    fontFamily: primaryFont,
    ...responsiveFontSizes({
      md: 16,
      lg: 18,
      xl: 18,
      xl2: 18,
      xl3: 18,
    }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1,
    fontSize: pxToRem(24),
    fontFamily: primaryFont,
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 1,
    fontSize: pxToRem(20),
    fontFamily: primaryFont,
  },
  body1: {
    lineHeight: 1,
    fontSize: pxToRem(18),
    fontFamily: primaryFont,
  },
  body2: {
    lineHeight: 1,
    fontSize: pxToRem(18),
    fontFamily: primaryFont,
  },
  caption: {
    lineHeight: 1,
    fontSize: pxToRem(16),
    fontFamily: primaryFont,
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1,
    fontSize: pxToRem(12),
    textTransform: "uppercase",
    fontFamily: primaryFont,
  },
  button: {
    fontWeight: 700,
    lineHeight: 1,
    fontSize: pxToRem(14),
    textTransform: "unset",
    fontFamily: primaryFont,
  },
};
