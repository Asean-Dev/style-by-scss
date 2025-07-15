// mui.d.ts
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xl2: true;
    xl3: true;
  }
  interface CardProps {
    enableHoverUnderline?: boolean;
  }
}

// Extend MUI Card props to include enableHoverUnderline
declare module "@mui/material/Card/CardProps" {
  interface CardProps {
    enableHoverUnderline?: boolean;
  }
}
