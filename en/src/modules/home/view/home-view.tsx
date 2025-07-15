"use client";
import { ContainerCore } from "@/components/core/container";
import { HomeBanner } from "@/modules/home/home-banner";
import { HomeEbook } from "@/modules/home/home-ebook";
import { HomeNewImage } from "@/modules/home/home-new-image";
import { HomeNewSlide } from "@/modules/home/home-new-slide";
import { Box } from "@mui/material";
import { HomeArticles } from "../home-articles";

export const HomeView = () => {
  return (
    <>
      {/* BG Layer */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          zIndex: 0,
        }}
      >
        {/* BG 1 */}
        <Box
          sx={{
            backgroundImage: "url(/assets/layout/bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "1034px",
            width: "100vw",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            height: "1535px",
            width: "50%",
            left: 0,
            top: "553px",
            backgroundImage:
              "linear-gradient(to bottom, rgb(255, 255, 255,0), #fff)",
            position: "absolute",
            borderBottomRightRadius: "60px",
            backdropFilter: "blur(5px)",

            zIndex: 0,
          }}
        />
        {/* BG 2 */}
        <Box
          sx={{
            backgroundImage: "url(/assets/layout/bg-2.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "1267px",
            mt: "-3%",
            width: "100vw",
            zIndex: 0,
          }}
        />
      </Box>

      {/* Foreground Content */}
      {/* <Box sx={{ position: "relative", zIndex: 1, height: "400vh" }}></Box> */}
      <Box sx={{ zIndex: 1 }}>
        <ContainerCore>
          <HomeBanner />
          <HomeNewSlide />
          <HomeNewImage />
        </ContainerCore>
        <HomeEbook />
        <HomeArticles />
      </Box>
    </>
  );
};
