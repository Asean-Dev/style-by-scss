import { FadeIn } from "@/components/core/fade-in";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export const FooterBottom = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        width: "100%",
        minHeight: 56,
        background: "transparent",
      }}
    >
      <FadeIn transform="left" fadeKey={"footer-bottom"} delay={0.2}>
        <Stack direction="row" spacing={2} alignItems="flex-start">
          <Image
            src="/assets/layout/footer/wifi.svg"
            alt="Google Analytics"
            width={40}
            height={40}
            style={{ width: "40px", height: "40px", objectFit: "contain" }}
          />
          <Image
            src="/assets/layout/footer/logo_1.svg"
            alt="WCAG"
            width={100}
            height={40}
            style={{ width: "100px", height: "40px", objectFit: "contain" }}
          />
          <Image
            src="/assets/layout/footer/logo_2.svg"
            alt="AChecker"
            width={100}
            height={40}
            style={{ width: "100px", height: "40px", objectFit: "contain" }}
          />
        </Stack>
      </FadeIn>
      <FadeIn transform="right" fadeKey={"footer-bottom"} delay={0.2}>
        <Stack direction="row" spacing={3} alignItems="center">
          <Typography
            variant="body1"
            sx={{
              color: "white",
              fontWeight: 600,
              fontSize: { xs: 13, md: 16 },
              mr: 1,
              fontFamily: "Montserrat",
            }}
          >
            Number of visitors
          </Typography>
          <Box
            sx={{
              borderRadius: "8px",
              backgroundColor: "white",
              minWidth: 82,
              px: 2,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 3,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#154A99",
                fontWeight: 500,
                fontSize: { xs: 16, md: 20 },
                m: 0,
                fontFamily: "Montserrat",
              }}
            >
              160,635
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              fontWeight: 600,
              fontSize: { xs: 13, md: 16 },
              mr: 1,
              fontFamily: "Montserrat",
            }}
          >
            Currently online
          </Typography>
          <Box
            sx={{
              borderRadius: "8px",
              backgroundColor: "white",
              minWidth: 70,
              px: 2,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#154A99",
                fontWeight: 500,
                fontSize: { xs: 16, md: 20 },
                m: 0,
                fontFamily: "Montserrat",
              }}
            >
              60,635
            </Typography>
          </Box>
        </Stack>
      </FadeIn>
    </Stack>
  );
};
