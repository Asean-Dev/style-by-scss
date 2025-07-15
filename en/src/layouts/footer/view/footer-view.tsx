"use client";

import { ContainerCore } from "@/components/core/container";
import { FooterNav } from "@/layouts/footer/view/footer-nav";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { FooterBottom } from "./footer-botton";
import { FooterSocial } from "./footer-social";
import { FadeIn } from "@/components/core/fade-in";

export const FooterView = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#154A99",
        position: "relative",
        overflow: "visible",
        width: "100%",
        height: 1,
        py: 2,
      }}
    >
      <ContainerCore
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#121D77",
            width: "1800px",
            height: "360px",
            borderRadius: "40px",
            position: "absolute",
            top: "-180px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
          }}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              height: "100%",
              borderRadius: "40px",
              overflow: "hidden",
              backgroundImage: "url(/assets/layout/footer/footer.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Box
              sx={{
                background:
                  "linear-gradient(90deg, rgba(21, 74, 153, 0.8) 0%, rgba(1, 0, 128, 0.6) 50%, rgba(21, 74, 153, 0.4) 100%)",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: "150px",
              }}
            >
              {/* Left Section - Logo and Title */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Image
                  src="/assets/layout/logo.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  style={{
                    width: "160px",
                    height: "160px",
                  }}
                />
                <Box>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "44px",
                      fontWeight: "bold",
                      lineHeight: 1.2,
                      fontFamily: "Montserrat",
                    }}
                  >
                    The Administrative Court Of Thailand
                  </Typography>
                </Box>
              </Box>

              {/* Right Section - Call Center */}
              <Box sx={{ textAlign: "right" }}>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "26px",
                    fontWeight: "500",
                    marginBottom: 1,
                    fontFamily: "Montserrat",
                  }}
                >
                  Call Center
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "44px",
                    fontWeight: "bold",
                    lineHeight: 1,
                    fontFamily: "Montserrat",
                  }}
                >
                  1355
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Stack direction={"column"} spacing={4}>
          <FooterNav />
          <FooterBottom />
          <Divider sx={{ borderColor: "white", opacity: 0.2 }} />
          <FooterSocial />
        </Stack>
      </ContainerCore>
    </Box>
  );
};
