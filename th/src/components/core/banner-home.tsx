'use client';

import React from 'react';
import Image from 'next/image';

// Import Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import custom styles
import "@/assets/scss/components/_swiper.scss";
import "@/assets/scss/modules/_banner-home.scss";

// libs
import {imageLoader} from "@/libs/imageLoader";

interface SlideData {
    id: number;
    linkUrl: string;
    imageUrl: string;
    imageAlt: string;
    bgUrl: string;
    title: React.ReactNode;
}
const slidesData: SlideData[] = [
    {
        id: 1,
        linkUrl: '#',
        imageUrl: '/img/upload/banner-i01.svg',
        imageAlt: 'ดาวน์โหลด Mobile Application',
        bgUrl: '/img/upload/banner01.jpg',
        title: <>ดาวน์โหลด<br />Mobile Application</>,
    },
    {
        id: 2,
        linkUrl: '#',
        imageUrl: '/img/upload/banner-i02.svg',
        imageAlt: 'คลังทรัพยากรการศึกษาเเบบเปิด',
        bgUrl: '/img/upload/banner02.jpg',
        title: <>คลังทรัพยากร<br />การศึกษาเเบบเปิด</>,
    },
    {
        id: 3,
        linkUrl: '#',
        imageUrl: '/img/upload/banner-i03.svg',
        imageAlt: 'ประกาศขายทอดตลาด ทรัพย์สินเจ้าพนักงาน',
        bgUrl: '/img/upload/banner03.jpg',
        title: <>ประกาศขายทอดตลาด<br />ทรัพย์สินเจ้าพนักงาน</>,
    },
    {
        id: 4,
        linkUrl: '#',
        imageUrl: '/img/upload/banner-i04.svg',
        imageAlt: 'ระบบสืบค้นทรัพยากรสารนิเทศ',
        bgUrl: '/img/upload/banner04.jpg',
        title: <>ระบบสืบค้น<br />ทรัพยากรสารนิเทศ</>,
    },
];

function BannerLinkSection() {
    return (
        <Box component="section" id="banner" className="section sc-banner">
            <Swiper
                loop={true}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                    // dynamicBullets: true,
                }}
                // autoplay={{
                //     delay: 6000,
                //     disableOnInteraction: false,
                //     pauseOnMouseEnter: true,
                // }}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="sc-banner-swiper"  data-aos="fade-up"
            >
                {slidesData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <Link href={slide.linkUrl} className="wrapper">
                            <Box className="thumb">
                                <Box component="figure" className="ratio ratio-1x1">
                                    <Image 
                                        loader={imageLoader}
                                        src={slide.imageUrl} 
                                        alt={slide.imageAlt}
                                        width={60}
                                        height={60}
                                    />
                                </Box>
                            </Box>
                            <Box className="content">
                                <Typography variant="h2" className="h5 title text-limit">
                                    {slide.title}
                                </Typography>
                            </Box>
                            <Box className="bg">
                                <Image 
                                    loader={imageLoader}
                                    src={slide.bgUrl} 
                                    alt={slide.imageAlt}
                                    width={480}
                                    height={300}
                                />
                            </Box>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
export default BannerLinkSection