"use client";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";

export default function ConfigLayoutProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
