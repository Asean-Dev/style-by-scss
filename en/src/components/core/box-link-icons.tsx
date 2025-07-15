import { Link, Stack, Typography } from "@mui/material";

type BoxLinkIconsProps = {
  icon: React.ReactNode;
  href: string;
  label?: string;
};
export const BoxLinkIcons = ({ icon, href, label }: BoxLinkIconsProps) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Link
        href={href}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
          borderRadius: 10,
          bgcolor: "white",
          transition: "all 0.4s ease",
          "&:hover": {
            bgcolor: (theme) => theme.palette.text.yellow,
          },
        }}
      >
        {icon}
      </Link>
      {label && (
        <Typography
          variant="caption"
          sx={{ color: "white", fontFamily: "Montserrat" }}
        >
          {label}
        </Typography>
      )}
    </Stack>
  );
};
