import { createTheme } from "@mui/material/styles";

import { typography } from "./core/typography";
import { components } from "./components";
import { themePalette } from "./palette";

export const theme = createTheme({
  palette: themePalette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xl2: 1440,
      xl3: 1600,
    },
  },
  typography: typography,
  components: components,
});
