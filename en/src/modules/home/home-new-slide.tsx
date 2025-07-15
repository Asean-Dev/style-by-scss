import { HeaderTitle } from "@/components/core/header-title";
import { useCardVisibility } from "@/hooks/use-card-visibility";
import { useHasAnimatedOne } from "@/hooks/use-has-animation-one";
import { fDate, formatStr } from "@/utils/format-time";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { CustomCard as Card } from "@/components/ui/custom-card";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MOCK_NEWS } from "./_mock";
import "swiper/css";
import Link from "next/link";

export const HomeNewSlide = () => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { hasAnimated, markAnimated } = useHasAnimatedOne();

  useEffect(() => {
    markAnimated(activeIndex);
  }, [markAnimated]);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <Box>
      <HeaderTitle title="News" titleMore="View all" linkUrl="#" />
      <Box sx={{ position: "relative", height: 440 }}>
        <Swiper
          modules={[Navigation]}
          loop={false}
          watchOverflow={true}
          centeredSlides={false}
          spaceBetween={50}
          slidesPerView={4}
          speed={400}
          allowTouchMove={true}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
        >
          {MOCK_NEWS.map((item, index) => {
            const isActive = index === activeIndex;
            const { opacity } = useCardVisibility({
              index,
              activeIndex,
              visibleRange: 3,
            });
            return (
              <SwiperSlide
                key={item.id}
                className={`${
                  isActive
                    ? "swiper-slide-active-custom"
                    : "swiper-slide-custom"
                } `}
              >
                <Card
                  enableHoverUnderline={true}
                  sx={{
                    width: "100%",
                    transition: "all 0.4s ease",
                    zIndex: isActive ? 2 : 1,
                    borderRadius: isActive ? "30px" : "24px",
                    opacity,
                  }}
                >
                  <Box sx={{ p: 2, pb: 0 }}>
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt="news"
                      sx={{
                        height: isActive ? "319px" : "220px",
                        borderRadius: isActive ? "24px" : "16px",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        transition: "all 0.3s",
                      }}
                    />
                  </Box>
                  <Box sx={{ p: "16px 16px 16px 16px" }}>
                    <Chip
                      label="Press release"
                      sx={{
                        backgroundColor: "#FFB400",
                        color: "white",
                        fontSize: "16px",
                        mb: "16px",
                      }}
                    />
                    <Typography
                      variant="h4"
                      fontWeight={600}
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: isActive ? 4 : 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontSize: isActive ? 28 : 18,
                        transition: "all 0.2s",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      mt={isActive ? 2 : 4}
                      display="block"
                      sx={{
                        fontSize: 20,
                        transition: "all 0.2s",
                      }}
                    >
                      {fDate(item.date)}
                    </Typography>
                  </Box>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <HomeCardNextPrev
          activeIndex={activeIndex}
          prevRef={prevRef}
          nextRef={nextRef}
          MOCK_NEWS={MOCK_NEWS}
          swiperInstance={swiperInstance}
        />
      </Box>
    </Box>
  );
};

type HomeCardNextPrevProps = {
  activeIndex: number;
  prevRef: React.RefObject<HTMLDivElement | null>;
  nextRef: React.RefObject<HTMLDivElement | null>;
  MOCK_NEWS: any[];
  swiperInstance: any;
};
const HomeCardNextPrev = ({
  activeIndex,
  prevRef,
  nextRef,
  MOCK_NEWS,
  swiperInstance,
}: HomeCardNextPrevProps) => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: -130,
        left: "39%",
        transform: "translateX(-50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        zIndex: 100,
        pointerEvents: "auto",
      }}
    >
      <Box
        ref={prevRef}
        onClick={() => {
          if (activeIndex > 0 && swiperInstance) {
            swiperInstance.slideTo(activeIndex);
          }
        }}
        sx={{
          bgcolor: (theme) => theme.palette.text.light,
          color: (theme) => theme.palette.text.yellow,
          width: 64,
          height: 64,
          cursor: "pointer",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "auto",
          boxShadow: "5.69px 5.69px 22.76px 0px rgba(109, 109, 109, 0.16)",
          "&:hover": {
            bgcolor: (theme) => theme.palette.text.yellow,
            color: (theme) => theme.palette.text.light,
          },
        }}
      >
        <ArrowBackIos fontSize="small" />
      </Box>
      <Box
        ref={nextRef}
        onClick={() => {
          if (activeIndex < MOCK_NEWS.length - 4 && swiperInstance) {
            swiperInstance.slideTo(activeIndex);
          }
        }}
        sx={{
          bgcolor: (theme) => theme.palette.text.light,
          color: (theme) => theme.palette.text.yellow,
          width: 64,
          height: 64,
          cursor: "pointer",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "auto",
          boxShadow: "5.69px 5.69px 22.76px 0px rgba(109, 109, 109, 0.16)",
          "&:hover": {
            bgcolor: (theme) => theme.palette.text.yellow,
            color: (theme) => theme.palette.text.light,
          },
        }}
      >
        <ArrowForwardIos fontSize="small" />
      </Box>
    </Box>
  );
};
