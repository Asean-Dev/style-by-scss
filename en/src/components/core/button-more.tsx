import { Box, Typography } from "@mui/material";
import { IconsHome } from "@/modules/home/icons";
import Link from "next/link";

export function BoxButtonMoreCore({
  title,
  linkUrl,
  color = "dark",
}: {
  title: string;
  linkUrl: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | "light"
    | "dark";
}) {
  return (
    <Box
      sx={{
        borderRadius: "100px",
        p: "8px 8px 8px 24px",
        backgroundColor: (theme) => theme.palette.text.light,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "6px",
        cursor: "pointer",
        textDecoration: "none",
        transition: "all 0.4s ease",
        zIndex: 100,
        "&:hover": {
          opacity: 0.8,
        },
      }}
      component={Link}
      href={linkUrl}
    >
      <Typography
        fontSize={20}
        fontWeight={400}
        m={0}
        sx={{
          fontFamily: "Montserrat",
          color: (theme) =>
            theme.palette.text[color as keyof typeof theme.palette.text],
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          width: "48px",
          height: "48px",
          bgcolor: (theme) => theme.palette.text.yellow,
          borderRadius: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconsHome.More sx={{ color: "white", width: 12, height: 12 }} />
      </Box>
    </Box>
  );
}
