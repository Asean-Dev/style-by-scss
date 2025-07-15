import { BoxButtonMoreCore } from "@/components/core/button-more";
import { FadeIn } from "@/components/core/fade-in";
import { HeaderTitle } from "@/components/core/header-title";
import { fDate, formatStr } from "@/utils/format-time";
import { alpha, Box, Card, Grid, Stack, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MOCK_NEWS_IMAGE } from "./_mock";
import { IconsHome } from "./icons";
export const HomeNewImage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Stack direction="column" spacing={5} sx={{ mt: 20 }} width={1}>
      <FadeIn transform="left" key="header" fadeKey={"new-image-header"}>
        <HeaderTitle title="Videos" sx={{ mt: 32.5 }} />
      </FadeIn>
      <Grid container spacing={30}>
        <Grid size={{ xs: 12, md: 6 }}>
          <FadeIn transform="default" fadeKey={"new-image-image"}>
            <Box
              style={{
                backgroundImage: `url(${MOCK_NEWS_IMAGE[activeIndex].image})`,
                width: "880px",
                height: "551px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "30px",
                boxShadow: "-40px 40px 80px 0px rgba(109, 109, 109, 0.3)",
                // transition: "all 0.4s ease",
                objectPosition: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: 86,
                  height: 86,
                  bgcolor: (theme) => alpha(theme.palette.text.light, 0.3),
                  clipPath: "url(#bgblur_0_1406_9592_clip_path)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(5px)",
                  borderRadius: "50%",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    bgcolor: (theme) => alpha(theme.palette.text.light, 0.5),
                    transform: "scale(1.05)",
                  },
                }}
              >
                <svg
                  width="24"
                  height="30"
                  viewBox="0 0 24 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1406_9594)">
                    <path
                      d="M0.00322097 14.9528C0.00322097 11.095 -0.000287035 7.23723 0.00322097 3.38163C0.00848297 0.579345 1.74845 -0.783394 3.74977 0.465235C9.9642 4.34059 16.1716 8.2357 22.3878 12.1067C23.3472 12.7035 23.9804 13.5703 23.998 14.9463C24.0173 16.3704 23.349 17.2723 22.386 17.8758C16.1558 21.7775 9.92736 25.6792 3.69189 29.5655C1.7695 30.7637 0.011991 29.3834 0.00497497 26.6886C-0.00554904 22.776 0.00146697 18.8655 0.00146697 14.9528H0.00322097Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1406_9594">
                      <rect width="24" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Box>
            </Box>
          </FadeIn>
          <FadeIn transform="left" fadeKey={"new-image-pagination"}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mt={"2rem"}
              sx={{
                width: "880px",
              }}
            >
              <Stack direction={"row"} spacing={2}>
                {Array.from({ length: 3 }).map((_, index) => (
                  <Box
                    key={`new-image-pagination-${index}`}
                    onClick={() => setActiveIndex(index)}
                    sx={{
                      width: 10,
                      height: 10,
                      backgroundColor: (theme) =>
                        activeIndex === index
                          ? theme.palette.primary.dark
                          : alpha(theme.palette.primary.dark, 0.1),
                      scale: activeIndex === index ? 1.5 : 1,
                      borderRadius: "50%",
                      transition: "all 0.4s ease",
                      cursor: "pointer",
                      zIndex: 2,
                    }}
                  />
                ))}
              </Stack>
              <BoxButtonMoreCore title="View all" linkUrl="#" />
            </Stack>
          </FadeIn>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} height={"100%"}>
          {MOCK_NEWS_IMAGE.map((item, index) => {
            return (
              <FadeIn
                key={`new-image-card-${index}`}
                transform="right"
                delay={index * 0.2}
                fadeKey={`new-image-card-${index}`}
              >
                <Card
                  sx={{
                    py: "24px",
                    px: "44px",
                    height: "172px",
                    maxWidth: "634px",
                    borderRadius: "24px",
                    cursor: "pointer",
                    bgcolor: (theme) =>
                      activeIndex === index
                        ? theme.palette.primary.main
                        : alpha("#fff", 0.9),
                    transition: "all 0.4s ease",
                    mb: 2,
                    position: "relative",
                    overflow: "visible",
                    zIndex: 2,
                  }}
                  onClick={() => {
                    setActiveIndex(index);
                    console.log("click");
                  }}
                >
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        layoutId="playButton"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={{
                          position: "absolute",
                          top: "40%",
                          left: -20,
                          transform: "translateY(-50%)",
                          zIndex: 100,
                          height: "100%",
                        }}
                      >
                        <Box
                          sx={{
                            bgcolor: (theme) => theme.palette.text.yellow,
                            width: 41,
                            height: 41,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 2,
                          }}
                        >
                          <IconsHome.Play fontSize="small" />
                        </Box>

                        <Box
                          sx={{
                            position: "absolute",
                            backgroundImage: (theme) =>
                              `linear-gradient(to right, ${alpha(
                                theme.palette.text.yellow,
                                0
                              )}, ${alpha(theme.palette.text.yellow, 1)})`,
                            width: 100,
                            height: 2,
                            top: "12%",
                            left: -100,
                            zIndex: 1,
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <Box
                    sx={{
                      width: "365px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      variant="h5"
                      color={activeIndex === index ? "#fff" : "text.dark"}
                      sx={{
                        fontSize: "20px",
                        fontWeight: 600,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="caption" color="text.disabled">
                      {fDate(new Date(item.date), formatStr.news)}
                    </Typography>
                  </Box>
                </Card>
              </FadeIn>
            );
          })}
        </Grid>
      </Grid>
    </Stack>
  );
};
