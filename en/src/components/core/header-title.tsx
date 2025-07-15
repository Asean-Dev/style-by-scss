import { BoxButtonMoreCore } from "@/components/core/button-more";
import { Stack, Typography, SxProps } from "@mui/material";

export const HeaderTitle = ({
  title,
  titleMore,
  linkUrl,
  sx,
  titleSx,
}: {
  title: string;
  titleMore?: string;
  linkUrl?: string;
  sx?: SxProps;
  titleSx?: SxProps;
}) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      my={"3.75rem"}
      zIndex={100}
      sx={sx}
    >
      <Typography
        variant="h1"
        fontWeight={600}
        color="text.primary"
        sx={{ fontSize: "48px", textTransform: "uppercase", ...titleSx }}
      >
        {title}
      </Typography>
      {titleMore && (
        <BoxButtonMoreCore title={titleMore} linkUrl={linkUrl || "#"} />
      )}
    </Stack>
  );
};
