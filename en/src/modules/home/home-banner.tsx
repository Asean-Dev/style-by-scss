import { BoxButtonMoreCore } from "@/components/core/button-more";
import { FadeIn } from "@/components/core/fade-in";
import { IconsHome } from "@/modules/home/icons";
import { theme } from "@/theme/theme";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  PlayArrow,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  LinearProgress,
  linearProgressClasses,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CustomProgress = styled(LinearProgress)(({ theme }) => ({
  height: 4,
  // borderRadius: 5,
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#FFB400", // Yellow-orange color
  },
  backgroundColor: theme.palette.grey[300],
}));

export const HomeBanner = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const totalSlides = 5;
  const autoplayDelay = 5000;

  useEffect(() => {
    if (isAutoplayPaused) return;

    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 100 / (autoplayDelay / 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [activeIndex, isAutoplayPaused, autoplayDelay]);

  return (
    <FadeIn
      transform="bottom"
      fadeKey={"banner-slide"}
      manual
      key={"banner-slide"}
    >
      <Box
        sx={{
          width: "100%",
          position: "relative",
          mt: 2,
          borderRadius: "40px",
          overflow: "hidden",
          style: { borderRadius: "40px" },
        }}
      >
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {[...Array(totalSlides)].map((_, i) => (
            <SwiperSlide key={i}>
              <Box
                sx={{
                  backgroundImage: "url(/assets/layout/bg-card.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  // aspectRatio: "16 / 9",
                  position: "relative",
                  minHeight: "900px",
                  height: "900px",
                }}
              >
                <Box
                  sx={{
                    mx: "141px",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h1"
                    color={theme.palette.text.yellow}
                    fontWeight={600}
                    fontSize={42}
                    maxWidth={888}
                  >
                    To render administrative justice in a fair <br /> and just
                    manner, rapidly and in accordance
                    <br /> with modern
                  </Typography>

                  <Typography
                    variant="body1"
                    color={theme.palette.text.light}
                    fontWeight={500}
                    fontSize={24}
                    maxWidth={888}
                    mt={2}
                  >
                    standards so as to strengthen good governance and be a court
                    of excellence
                  </Typography>
                  <BoxButtonMoreCore
                    title="See more"
                    linkUrl="#"
                    color="primary"
                  />
                </Box>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{
                    position: "absolute",
                    bottom: "141px",
                    width: "20%",
                    left: "141px",
                    zIndex: 100,
                  }}
                >
                  <Typography fontWeight="bold" color="white" variant="caption">
                    {activeIndex + 1}
                  </Typography>
                  <CustomProgress
                    variant="determinate"
                    value={progress}
                    sx={{ flexGrow: 1 }}
                  />
                  <Typography fontWeight="bold" color="white" variant="caption">
                    {totalSlides}
                  </Typography>
                  <Stack direction="row" alignItems="center">
                    <IconButton
                      onClick={() => swiperRef.current?.slidePrev()}
                      sx={{
                        m: 0,
                        p: 0,
                        transform: "rotate(180deg)",
                      }}
                    >
                      <IconsHome.Forward
                        sx={{
                          width: 16,
                          height: 16,
                        }}
                      />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        if (isAutoplayPaused) {
                          swiperRef.current?.autoplay?.resume();
                          setIsAutoplayPaused(false);
                        } else {
                          swiperRef.current?.autoplay?.pause();
                          setIsAutoplayPaused(true);
                        }
                      }}
                      sx={{
                        m: 0,
                        p: 0,
                      }}
                    >
                      {isAutoplayPaused ? (
                        <PlayArrow
                          sx={{ color: "white", width: 16, height: 16, m: 0 }}
                        />
                      ) : (
                        <Pause
                          sx={{ color: "white", width: 16, height: 16, m: 0 }}
                        />
                      )}
                    </IconButton>
                    <IconButton
                      onClick={() => swiperRef.current?.slideNext()}
                      sx={{
                        m: 0,
                        p: 0,
                      }}
                    >
                      <IconsHome.Forward
                        sx={{ color: "white", width: 16, height: 16 }}
                      />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls Bar */}
      </Box>
    </FadeIn>
  );
};
