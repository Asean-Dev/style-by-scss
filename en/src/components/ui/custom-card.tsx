import { Box, Card, CardProps, Link, SxProps } from "@mui/material";
import NextLink from "next/link";

export type CustomCardProps = CardProps & {
  enableHoverUnderline?: boolean;
  children: React.ReactNode;
  sx?: SxProps;
  href?: string;
};

export const CustomCard = ({
  enableHoverUnderline,
  sx,
  href = "#",
  ...props
}: CustomCardProps) => {
  return (
    <Card
      {...props}
      sx={{
        boxShadow: "24px 24px 80px 0px rgba(109, 109, 109, 0.16)",
        borderRadius: "30px",
        backgroundColor: "#ffffff",
        ...(enableHoverUnderline && {
          "&:hover .MuiTypography-root": {
            textDecoration: "underline",
          },
        }),
        ...sx,
      }}
    >
      <Link
        href={href}
        style={{
          textDecoration: "none",
          display: "block",
          borderRadius: "30px",
        }}
      >
        {props.children}
      </Link>
    </Card>
  );
};
