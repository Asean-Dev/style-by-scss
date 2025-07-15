import { ContainerCore } from "@/components/core/container";
import { BoxButtonMoreCore } from "@/components/core/button-more";
import {
  alpha,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
  Chip,
  Button,
  Divider,
} from "@mui/material";
import { IconsHome } from "@/modules/home/icons";
import { fDate, formatStr } from "@/utils/format-time";
import { MOCK_EBOOK } from "./_mock";
import { useRef, useState, useEffect } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useCardVisibility } from "@/hooks/use-card-visibility";
import { FadeIn } from "@/components/core/fade-in";
import { useHasAnimatedOne } from "@/hooks/use-has-animation-one";
import { HeaderTitle } from "@/components/core/header-title";
import Link from "next/link";

export const HomeEbook = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const { hasAnimated, markAnimated } = useHasAnimatedOne();

  useEffect(() => {
    markAnimated(activeIndex);
  }, [activeIndex, markAnimated]);

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
    <ContainerCore
      sx={{
        mt: 10,
        mb: 10,
        pt: 10,
        position: "relative",
        overflow: "visible",
      }}
    >
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom,"#6DA6DD" ,${alpha(
            "#6DA6DD",
            0.3
          )})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "40px",
          width: "100%",
          height: "1185px",
          position: "absolute",
          top: -350,
          left: 0,
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          backgroundImage: "url(/assets/home/ebook/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "40px",
          width: "100%",
          height: "1185px",
          position: "absolute",
          top: -350,
          left: 0,
          zIndex: 0,
        }}
      />
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <HeaderTitle
          title="Ebook"
          linkUrl="#"
          titleMore="View all"
          titleSx={{ color: "white" }}
          sx={{ mt: "7rem" }}
        />
        <Box sx={{ mt: 4, height: 1 }}>
          <Box
            sx={{
              "& .swiper": {
                backgroundColor: "transparent !important",
                background: "none !important",
                overflow: "visible !important",
                paddingBottom: "20px",
              },
              "& .swiper-wrapper": {
                backgroundColor: "transparent !important",
              },
            }}
          >
            <Swiper
              modules={[Navigation]}
              loop={false}
              watchOverflow={true}
              centeredSlides={false}
              spaceBetween={24}
              slidesPerView={2}
              slidesOffsetBefore={0}
              slidesOffsetAfter={0}
              breakpoints={{
                600: { slidesPerView: 1 },
                900: { slidesPerView: 2 },
              }}
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              style={{
                maxHeight: 600,
                borderRadius: "20px",
                paddingBottom: 16,
              }}
            >
              {MOCK_EBOOK.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <FadeIn
                    transform="bottom"
                    delay={index * 0.2}
                    fadeKey={"ebook"}
                  >
                    <HomeEbookCard
                      title={item.title}
                      date={item.date}
                      image={item.image}
                      index={index}
                      activeIndex={activeIndex}
                    />
                  </FadeIn>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          width: "100%",
          px: 2,
          zIndex: 100,
          mt: 5,
        }}
      >
        <Box
          ref={prevRef}
          onClick={() => swiperInstance?.slidePrev()}
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
          onClick={() => swiperInstance?.slideNext()}
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
    </ContainerCore>
  );
};

type HomeEbookCardProps = {
  title: string;
  date: string;
  image: string;
  index: number;
  activeIndex: number;
};

const HomeEbookCard = ({
  title,
  date,
  image,
  index,
  activeIndex,
}: HomeEbookCardProps) => {
  const { opacity } = useCardVisibility({
    index,
    activeIndex,
    visibleRange: 1,
  });
  return (
    <Card
      sx={{
        borderRadius: "30px",
        height: 1,
        p: 1,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        transition: "all 0.4s ease",
        gap: 2,
        opacity,
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt="ebook"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <Box
        sx={{
          py: 2,
          height: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Chip
            label="Journals"
            sx={{
              backgroundColor: (theme) => theme.palette.text.yellow,
              color: "white",
              fontWeight: 400,
              fontSize: "20px",
              my: 4,
            }}
          />
          <Box sx={{ width: "343px" }}>
            <Typography variant="h4" fontWeight={600}>
              {title}
            </Typography>
          </Box>
        </Stack>
        <Stack
          direction="column"
          spacing={4}
          alignItems="flex-start"
          justifyContent="flex-end"
          mb={4}
        >
          <Typography variant="caption" color="text.disabled">
            {fDate(new Date(date), formatStr.news)}
          </Typography>
          <Divider
            sx={{
              width: "100%",
              borderColor: (theme) => theme.palette.text.primary,
            }}
          />
          <Button
            variant="text"
            color="inherit"
            component={Link}
            href="#"
            sx={{
              color: (theme) => theme.palette.text.primary,
            }}
            endIcon={<IconsHome.Next />}
          >
            Read more
          </Button>
        </Stack>
      </Box>
    </Card>
  );
};
