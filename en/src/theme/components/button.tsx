import type { ButtonProps } from "@mui/material/Button";
import type {
  Theme,
  CSSObject,
  Components,
  ComponentsVariants,
} from "@mui/material/styles";

import { buttonClasses } from "@mui/material/Button";
import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

// NEW VARIANT
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    soft: true;
  }
}

const COLORS = [
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
] as const;

type ColorType = (typeof COLORS)[number];

function styleColors(
  ownerState: ButtonProps,
  styles: (val: ColorType) => CSSObject
) {
  const outputStyle = COLORS.reduce((acc, color) => {
    if (!ownerState.disabled && ownerState.color === color) {
      acc = styles(color);
    }
    return acc;
  }, {});

  return outputStyle;
}

// ----------------------------------------------------------------------

const MuiButtonBase: Components<Theme>["MuiButtonBase"] = {
  /** **************************************
   * STYLE
   *************************************** */
  styleOverrides: {
    root: ({ theme }) => ({ fontFamily: theme.typography.fontFamily }),
  },
};

// ----------------------------------------------------------------------

const softVariant: Record<string, ComponentsVariants<Theme>["MuiButton"]> = {
  colors: COLORS.map((color) => ({
    props: ({ ownerState }) =>
      !ownerState.disabled &&
      ownerState.variant === "soft" &&
      ownerState.color === color,
    style: ({ theme }) => ({
      color: theme.palette.text.light,
      // backgroundColor:
      //   color === "primary"
      //     ? theme.palette.primary.main
      //     : color === "secondary"
      //     ? theme.palette.secondary.main
      //     : color === "info"
      //     ? theme.palette.info.main
      //     : color === "success"
      //     ? theme.palette.success.main
      //     : color === "warning"
      //     ? theme.palette.warning.main
      //     : color === "error"
      //     ? theme.palette.error.main
      //     : theme.palette.text.light,
      // "&:hover": {
      //   backgroundColor:
      //     color === "primary"
      //       ? alpha(theme.palette.primary.main, 0.8)
      //       : color === "secondary"
      //       ? alpha(theme.palette.secondary.main, 0.8)
      //       : color === "info"
      //       ? alpha(theme.palette.info.main, 0.8)
      //       : color === "success"
      //       ? alpha(theme.palette.success.main, 0.8)
      //       : color === "warning"
      //       ? alpha(theme.palette.warning.main, 0.8)
      //       : color === "error"
      //       ? alpha(theme.palette.error.main, 0.8)
      //       : theme.palette.text.light,
      // },
    }),
  })),
  base: [
    {
      props: ({ ownerState }) => ownerState.variant === "soft",
      style: ({ theme }) => ({
        backgroundColor: alpha(theme.palette.grey[500], 0.08),
        color: theme.palette.text.light,
        "&:hover": {
          backgroundColor: alpha(theme.palette.grey[500], 0.24),
        },
        [`&.${buttonClasses.disabled}`]: {
          backgroundColor: theme.palette.action.disabledBackground,
        },
      }),
    },
  ],
};

const MuiButton: Components<Theme>["MuiButton"] = {
  /** **************************************
   * DEFAULT PROPS
   *************************************** */
  defaultProps: { color: "inherit", disableElevation: true },

  /** **************************************
   * VARIANTS
   *************************************** */
  variants: [
    /**
     * @variant soft
     */
    ...[...softVariant.base!, ...softVariant.colors!],
  ],

  /** **************************************
   * STYLE
   *************************************** */
  styleOverrides: {
    /**
     * @root
     */
    root: {
      borderRadius: "100px",
      fontWeight: 400,
      fontSize: "20px",
    },
    /**
     * @variant contained
     */
    contained: ({ theme, ownerState }) => {
      const styled = {
        colors: styleColors(ownerState, (color) => ({
          backgroundColor: theme.palette[color].main,
          color: theme.palette.text.light,
          "&:hover": {
            // boxShadow: theme.shadows[8],
            backgroundColor: alpha(theme.palette[color].main, 0.95),
          },
        })),
        inheritColor: {
          ...(ownerState.color === "inherit" &&
            !ownerState.disabled && {
              fontWeight: 400,
              color: theme.palette.text.dark,
              backgroundColor: theme.palette.text.light,
              "&:hover": {
                // boxShadow: theme.shadows[8],
                backgroundColor: alpha(theme.palette.text.light, 0.95),
              },
            }),
        },
      };
      return { ...styled.inheritColor, ...styled.colors };
    },
    /**
     * @variant outlined
     */
    outlined: ({ theme, ownerState }) => {
      const styled = {
        colors: styleColors(ownerState, (color) => ({
          borderColor: color,
          color: color,
          borderStyle: "solid",
          "&:hover": {
            backgroundColor: alpha(theme.palette.text.light, 0.08),
          },
        })),
        inheritColor: {
          ...(ownerState.color === "inherit" &&
            !ownerState.disabled && {
              color: theme.palette.text.light,
              borderColor: theme.palette.text.light,
              "&:hover": {
                backgroundColor: alpha(theme.palette.text.light, 0.08),
              },
            }),
        },
        base: {
          "&:hover": {
            borderColor: "currentColor",
            // boxShadow: "0 0 0 0.75px currentColor",
          },
        },
      };
      return { ...styled.base, ...styled.inheritColor, ...styled.colors };
    },
    /**
     * @variant text
     */
    text: ({ ownerState, theme }) => {
      const styled = {
        inheritColor: {
          ...(ownerState.color === "inherit" &&
            !ownerState.disabled && {
              color: theme.palette.text.dark,
              "&:hover": { backgroundColor: theme.palette.action.hover },
            }),
        },
      };
      return { ...styled.inheritColor };
    },
    /**
     * @size
     */
    sizeSmall: ({ ownerState }) => ({
      height: "30px",
      fontSize: "16px",
      ...(ownerState.variant === "text"
        ? { paddingLeft: "4px", paddingRight: "4px" }
        : { paddingLeft: "8px", paddingRight: "8px" }),
    }),
    sizeMedium: ({ ownerState }) => ({
      height: "48px",
      fontSize: "18px",
      ...(ownerState.variant === "text"
        ? { paddingLeft: "8px", paddingRight: "8px" }
        : { paddingLeft: "12px", paddingRight: "12px" }),
    }),
    sizeLarge: ({ ownerState }) => ({
      height: "64px",
      fontSize: "20px",
      ...(ownerState.variant === "text"
        ? { paddingLeft: "10px", paddingRight: "10px" }
        : { paddingLeft: "16px", paddingRight: "16px" }),
    }),
  },
};

// ----------------------------------------------------------------------

export const button = { MuiButtonBase, MuiButton };
