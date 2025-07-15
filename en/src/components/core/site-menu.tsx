import { Box, Link, Stack, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

export const SiteMenu = ({
  subMenu,
  title,
}: {
  subMenu?: {
    title: string;
    linkUrl: string;
    pathSegment: string;
  }[];
  title: string;
}) => {
  const pathname = usePathname();
  const isAdminCourtSection = pathname.includes("administrative-court");

  return (
    <Box sx={{ width: "420px", height: "100%" }}>
      <Box
        sx={{
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          bgcolor: "primary.main",
          p: "30px",
        }}
      >
        <Typography variant="h4" fontWeight={600} color="white">
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          borderBottomLeftRadius: "24px",
          borderBottomRightRadius: "24px",
          p: "30px",
          bgcolor: "white",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "21px",
          height: "100%",
        }}
      >
        {subMenu?.map((item, index) => (
          <Link
            key={index}
            href={item.linkUrl}
            sx={{ textDecoration: "none", display: "block" }}
          >
            <Box
              sx={{
                borderBottom: "1px solid #D9D9D9",
                height: "59px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Stack direction="row" height={"38px"} alignItems={"center"}>
                <Typography
                  variant="h6"
                  fontFamily="Montserrat"
                  fontSize={20}
                  fontWeight={600}
                  color="text.disabled"
                  sx={{
                    color: pathname.includes(item.pathSegment)
                      ? "text.primary"
                      : "text.disabled",
                  }}
                >
                  {item.title}
                </Typography>
              </Stack>
              <BoxMore isActive={pathname.includes(item.pathSegment)} />
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

const BoxMore = ({ isActive }: { isActive: boolean }) => {
  return (
    <Box
      sx={{
        width: "38px",
        height: "38px",
        borderRadius: "50%",
        bgcolor: !isActive ? "white" : "#FFC300",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: !isActive ? "5.69px 5.69px 22.76px 0px #6D6D6D29" : "none",
        transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
        transition: "all 0.3s ease",
      }}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.25 10.75L10.75 1.25M10.75 1.25H2.2M10.75 1.25V9.8"
          stroke={!isActive ? "#FFC300" : "#FFFFFF"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};
