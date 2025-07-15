import { ContainerCore } from "@/components/core/container";
import { FadeIn } from "@/components/core/fade-in";
import { HeaderTitle } from "@/components/core/header-title";
import { useCardVisibility } from "@/hooks/use-card-visibility";
import { fDate, formatStr } from "@/utils/format-time";
import {
  Box,
  Card,
  CardMedia,
  Grid,
  Link,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { MOCK_ARTICLES } from "./_mock";
import { IconsHome } from "./icons";
import { CustomCard } from "@/components/ui/custom-card";

export const HomeArticles = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperRef | null>(null);

  return (
    <Box
      sx={{
        backgroundImage: "url(/assets/home/articles/bg_1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        pb: "280px",
      }}
    >
      <ContainerCore>
        <HeaderTitle title="Articles" linkUrl="#" titleMore="View all" />
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          loop={false}
          watchOverflow={true}
          centeredSlides={false}
          spaceBetween={24}
          slidesPerView={3}
          slidesOffsetBefore={0}
          slidesOffsetAfter={0}
          breakpoints={{
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
        >
          {MOCK_ARTICLES.map((item, index) => (
            <SwiperSlide key={index}>
              <FadeIn
                transform="bottom"
                fadeKey={`articles-card`}
                delay={index * 0.2}
              >
                <HomeArticlesCard
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  date={item.date}
                  views={item.views}
                  index={index}
                  activeIndex={activeIndex}
                />
              </FadeIn>
            </SwiperSlide>
          ))}
        </Swiper>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={1}
          mt={4}
        >
          {Array.from({
            length: Math.ceil(MOCK_ARTICLES.length - 2),
          }).map((_, index) => (
            <Box
              key={index}
              onClick={() => swiperRef.current?.swiper.slideTo(index)}
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
              }}
            />
          ))}
        </Stack>
        <HomeArticlesCardItem />
      </ContainerCore>
    </Box>
  );
};

type HomeArticlesCardProps = {
  title: string;
  image: string;
  description: string;
  date: string;
  views: number;
  index: number;
  activeIndex: number;
};
const HomeArticlesCard = ({
  title,
  image,
  description,
  date,
  views,
  index,
  activeIndex,
}: HomeArticlesCardProps) => {
  const { opacity } = useCardVisibility({
    index,
    activeIndex,
    visibleRange: 2,
  });
  return (
    <CustomCard
      href="#"
      enableHoverUnderline={true}
      sx={{
        opacity,
        transition: "all 0.4s ease",
        maxWidth: "573px",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: "24px",
        }}
      />
      <Box
        sx={{
          height: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "24px",
          gap: 1,
          textDecoration: "none",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={600}
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          fontSize={16}
          sx={{
            fontWeight: 400,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" fontSize={14} color="text.disabled">
            {fDate(new Date(date), formatStr.news)}
          </Typography>
          <Stack direction="row" alignItems="center" gap={1}>
            <IconsHome.Eye />
            <Typography variant="body2" fontSize={14} color="text.disabled">
              {views}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </CustomCard>
  );
};

const HomeArticlesCardItem = () => {
  return (
    <Grid container width={1} mt={10} spacing={3}>
      <Grid size={3}>
        <FadeIn transform="bottom" fadeKey={`articles-card-item`} delay={0}>
          <CustomCard
            href="#"
            enableHoverUnderline={true}
            sx={{
              transition: "all 0.4s ease",
              bgcolor: "primary.main",
              color: "text.light",
              p: "40px",
              borderRadius: "20px",
              maxWidth: "420px",
              height: "220px",
              position: "relative",
              overflow: "visible",
              cursor: "pointer",
              "& .MuiTypography-root": {
                color: "text.light",
              },
              "&:hover": {
                backgroundColor: "text.light",
                color: "primary.main",
                "& .MuiTypography-root": {
                  color: "primary.main",
                },
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "100%",
                textDecoration: "none",
              }}
            >
              <Box sx={{ flex: 1, pr: 2 }}>
                <Typography variant="h5" fontWeight={500}>
                  Download
                  <br />
                  Mobile Application
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  minWidth: "140px",
                  height: "140px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={"/assets/home/articles/item_1.png"}
                  alt={"item"}
                  width={140}
                  height={140}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>
          </CustomCard>
        </FadeIn>
      </Grid>
      <Grid size={3}>
        <FadeIn transform="bottom" fadeKey={`articles-card-item`} delay={0.2}>
          <CustomCard
            href="#"
            enableHoverUnderline={true}
            sx={{
              transition: "all 0.4s ease",
              bgcolor: "primary.main",
              color: "text.light",
              p: "40px",
              borderRadius: "20px",
              maxWidth: "420px",
              height: "220px",
              position: "relative",
              overflow: "visible",
              cursor: "pointer",
              "& .MuiTypography-root": {
                color: "text.light",
              },
              "&:hover": {
                backgroundColor: "text.light",
                color: "primary.main",
                "& .MuiTypography-root": {
                  color: "primary.main",
                },
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "100%",
                textDecoration: "none",
              }}
            >
              <Box sx={{ flex: 1, pr: 2 }}>
                <Typography variant="h5" fontWeight={500}>
                  Open Education
                  <br />
                  Resource Center
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  minWidth: "140px",
                  height: "140px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={"/assets/home/articles/item_2.png"}
                  alt={"item"}
                  width={140}
                  height={140}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>
          </CustomCard>
        </FadeIn>
      </Grid>
      <Grid size={3}>
        <FadeIn transform="bottom" fadeKey={`articles-card-item`} delay={0.4}>
          <CustomCard
            href="#"
            enableHoverUnderline={true}
            sx={{
              transition: "all 0.4s ease",
              bgcolor: "primary.main",
              color: "text.light",
              p: "40px",
              borderRadius: "20px",
              maxWidth: "420px",
              height: "220px",
              position: "relative",
              overflow: "visible",
              cursor: "pointer",
              "& .MuiTypography-root": {
                color: "text.light",
              },
              "&:hover": {
                backgroundColor: "text.light",
                color: "primary.main",
                "& .MuiTypography-root": {
                  color: "primary.main",
                },
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "100%",
                textDecoration: "none",
              }}
            >
              <Box sx={{ flex: 1, pr: 2 }}>
                <Typography variant="h5" fontWeight={500}>
                  Auction Announcement
                  <br />
                  Government Official
                  <br />
                  Property
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  overflow: "visible",
                  width: "90px",
                  height: "140px",
                }}
              >
                <Image
                  src={"/assets/home/articles/item_3.png"}
                  alt={"item"}
                  width={300}
                  height={300}
                  style={{
                    top: "75%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    position: "absolute",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Box>
            </Box>
          </CustomCard>
        </FadeIn>
      </Grid>
      <Grid size={3}>
        <FadeIn transform="bottom" fadeKey={`articles-card-item`} delay={0.6}>
          <CustomCard
            href="#"
            enableHoverUnderline={true}
            sx={{
              transition: "all 0.4s ease",
              bgcolor: "primary.main",
              color: "text.light",
              p: "40px",
              borderRadius: "20px",
              maxWidth: "420px",
              height: "220px",
              position: "relative",
              overflow: "visible",
              cursor: "pointer",
              "& .MuiTypography-root": {
                color: "text.light",
              },
              "&:hover": {
                backgroundColor: "text.light",
                color: "primary.main",
                "& .MuiTypography-root": {
                  color: "primary.main",
                },
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "100%",
                textDecoration: "none",
              }}
            >
              <Box sx={{ flex: 1, pr: 2 }}>
                <Typography variant="h5" fontWeight={500}>
                  Search system
                  <br />
                  Information resources
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  overflow: "visible",
                  width: "90px",
                  height: "140px",
                }}
              >
                <Image
                  src={"/assets/home/articles/item_4.png"}
                  alt={"item"}
                  width={200}
                  height={200}
                  style={{
                    top: "50%",
                    left: "13%",
                    transform: "translate(-50%, -50%)",
                    position: "absolute",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </Box>
            </Box>
          </CustomCard>
        </FadeIn>
      </Grid>
    </Grid>
  );
};
