import { Box, SxProps, Theme } from "@mui/material";

export const ContainerCore = ({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Box
      sx={{
        padding: "0 60px",
        margin: "0 auto",
        ...sx,
        maxWidth: "1920px",
      }}
    >
      {children}
    </Box>
  );
};
