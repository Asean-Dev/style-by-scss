'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

// Import Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import type { Swiper as SwiperCore } from 'swiper';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import custom styles
import "@/assets/scss/components/_swiper.scss";
import "@/assets/scss/components/_button.scss";
import "@/assets/scss/components/_hero-banner.scss";

// libs
import {imageLoader} from "@/libs/imageLoader";

interface SlideData {
    id: number;
    vdoUrl: string;
    imageUrl: string;
    imageAlt: string;
    title: React.ReactNode;
    desc: string;
}
const slidesData: SlideData[] = [
    {
        id: 1,
        vdoUrl: '/img/upload/hero-video.mp4',
        imageUrl: '',
        imageAlt: '',
        title: <>อำนวย<span className="color">ความยุติธรรม</span>ทางปกครอง<br/>รวดเร็ว ทันสมัย</>,
        desc: 'เพื่อเสริมสร้างธรรมาภิบาลในสังคมและเป็นศาลแห่งความเป็นเลิศ',
    },
    {
        id: 2,
        vdoUrl: '/img/upload/hero-video.mp4',
        imageUrl: '',
        imageAlt: '',
        title: <>อำนวย<span className="color">ความยุติธรรม</span>ทางปกครอง<br/>รวดเร็ว ทันสมัย</>,
        desc: 'เพื่อเสริมสร้างธรรมาภิบาลในสังคมและเป็นศาลแห่งความเป็นเลิศ',
    },
    {
        id: 3,
        vdoUrl: '/img/upload/hero-video.mp4',
        imageUrl: '',
        imageAlt: '',
        title: <>อำนวย<span className="color">ความยุติธรรม</span>ทางปกครอง<br/>รวดเร็ว ทันสมัย</>,
        desc: 'เพื่อเสริมสร้างธรรมาภิบาลในสังคมและเป็นศาลแห่งความเป็นเลิศ',
    },
];

function HeroBanner() {
    return (
        <Box id="heroBanner" className="hero-banner" role="banner">
            <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                // autoplay={{
                //     delay: 6000,
                //     disableOnInteraction: false,
                //     pauseOnMouseEnter: true,
                // }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="hero-banner-swiper"
            >
                {slidesData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <Box className="content" data-aos="fade-down">
                            <Container className="container">
                                <Box className="inner">
                                    <Typography variant="h1" className="title text-limit">{slide.title}</Typography>
                                    <Typography variant="h2" className="desc text-limit">{slide.desc}</Typography>
                                    <Box className="action">
                                        <Button
                                            component={Link}
                                            href="/"
                                            variant="contained"
                                            color="primary"
                                        >
                                            <span className="icon">
                                                <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22 28.125C22 28.2908 21.9342 28.4497 21.8169 28.5669C21.6997 28.6842 21.5408 28.75 21.375 28.75H16.375V27.5C16.375 27.3342 16.3092 27.1753 16.1919 27.0581C16.0747 26.9408 15.9158 26.875 15.75 26.875H13.875V13.125H18.485L15.9644 18.125H15.75C15.5842 18.125 15.4253 18.1908 15.3081 18.3081C15.1908 18.4253 15.125 18.5842 15.125 18.75C15.125 19.9103 15.5859 21.0231 16.4064 21.8436C17.2269 22.6641 18.3397 23.125 19.5 23.125C20.6603 23.125 21.7731 22.6641 22.5936 21.8436C23.4141 21.0231 23.875 19.9103 23.875 18.75C23.875 18.5842 23.8092 18.4253 23.6919 18.3081C23.5747 18.1908 23.4158 18.125 23.25 18.125H23.0113L20.0625 12.2206H20.0581C20.05 12.2044 20.045 12.1862 20.0356 12.1706C19.9792 12.0796 19.9003 12.0046 19.8065 11.9528C19.7127 11.901 19.6071 11.8742 19.5 11.875H13.76C13.834 11.6748 13.8729 11.4634 13.875 11.25C13.875 10.7527 13.6775 10.2758 13.3258 9.92417C12.9742 9.57254 12.4973 9.375 12 9.375C11.5027 9.375 11.0258 9.57254 10.6742 9.92417C10.3225 10.2758 10.125 10.7527 10.125 11.25C10.1271 11.4634 10.166 11.6748 10.24 11.875H4.5C4.38426 11.875 4.2708 11.9071 4.17226 11.9678C4.07371 12.0285 3.99396 12.1154 3.94188 12.2187L0.964375 18.125H0.75C0.58424 18.125 0.425269 18.1908 0.308058 18.3081C0.190848 18.4253 0.125 18.5842 0.125 18.75C0.125 19.9103 0.585936 21.0231 1.40641 21.8436C2.22688 22.6641 3.33968 23.125 4.5 23.125C5.66032 23.125 6.77312 22.6641 7.59359 21.8436C8.41406 21.0231 8.875 19.9103 8.875 18.75C8.875 18.5842 8.80915 18.4253 8.69194 18.3081C8.57473 18.1908 8.41576 18.125 8.25 18.125H8.01125L5.51125 13.125H10.125V26.875H8.25C8.08424 26.875 7.92527 26.9408 7.80806 27.0581C7.69085 27.1753 7.625 27.3342 7.625 27.5V28.75H2.625C2.45924 28.75 2.30027 28.6842 2.18306 28.5669C2.06585 28.4497 2 28.2908 2 28.125V23.75H0.75V28.125C0.75 28.6223 0.947544 29.0992 1.29917 29.4508C1.65081 29.8025 2.12772 30 2.625 30H21.375C21.8723 30 22.3492 29.8025 22.7008 29.4508C23.0525 29.0992 23.25 28.6223 23.25 28.125V23.75H22V28.125ZM19.5 21.875C18.7798 21.8742 18.082 21.6251 17.5241 21.1697C16.9662 20.7143 16.5825 20.0804 16.4375 19.375H22.5625C22.4175 20.0804 22.0338 20.7143 21.4759 21.1697C20.918 21.6251 20.2202 21.8742 19.5 21.875ZM17.3638 18.125L19.5 13.8925L21.6137 18.125H17.3638ZM12 10.625C12.1236 10.625 12.2445 10.6617 12.3472 10.7303C12.45 10.799 12.5301 10.8966 12.5774 11.0108C12.6247 11.125 12.6371 11.2507 12.613 11.3719C12.5889 11.4932 12.5294 11.6045 12.4419 11.6919C12.3545 11.7794 12.2432 11.8389 12.1219 11.863C12.0007 11.8871 11.875 11.8747 11.7608 11.8274C11.6466 11.7801 11.549 11.7 11.4803 11.5972C11.4117 11.4945 11.375 11.3736 11.375 11.25C11.375 11.0842 11.4408 10.9253 11.5581 10.8081C11.6753 10.6908 11.8342 10.625 12 10.625ZM4.5 21.875C3.77984 21.8742 3.08198 21.6251 2.5241 21.1697C1.96622 20.7143 1.58245 20.0804 1.4375 19.375H7.5625C7.41755 20.0804 7.03378 20.7143 6.4759 21.1697C5.91802 21.6251 5.22016 21.8742 4.5 21.875ZM2.36375 18.125L4.5 13.8925L6.61375 18.125H2.36375ZM11.375 13.125H12.625V26.875H11.375V13.125ZM8.875 28.75V28.125H15.125V28.75H8.875Z" fill="white"/>
                                                    <path d="M2 1.875C2 1.70924 2.06585 1.55027 2.18306 1.43306C2.30027 1.31585 2.45924 1.25 2.625 1.25H16.375V5C16.375 5.49728 16.5725 5.97419 16.9242 6.32583C17.2758 6.67746 17.7527 6.875 18.25 6.875H22V11.875H23.25V6.25C23.25 6.23688 23.2431 6.225 23.2425 6.21125C23.2389 6.15609 23.2279 6.10166 23.21 6.04937C23.2031 6.02937 23.1981 6.01063 23.1894 5.99125C23.159 5.92325 23.1166 5.86123 23.0644 5.80813L17.4394 0.183125C17.3863 0.130877 17.3243 0.0885448 17.2562 0.058125C17.2369 0.049375 17.2181 0.044375 17.1981 0.0375C17.1458 0.0195559 17.0914 0.00862726 17.0362 0.005C17.025 0.006875 17.0131 0 17 0H2.625C2.12772 0 1.65081 0.197544 1.29917 0.549175C0.947544 0.900805 0.75 1.37772 0.75 1.875V11.875H2V1.875ZM21.1162 5.625H18.25C18.0842 5.625 17.9253 5.55915 17.8081 5.44194C17.6908 5.32473 17.625 5.16576 17.625 5V2.13375L21.1162 5.625Z" fill="white"/>
                                                    <path d="M5.75 3.75H4.5V5H5.75V3.75Z" fill="white"/>
                                                    <path d="M9.5 3.75H7V5H9.5V3.75Z" fill="white"/>
                                                    <path d="M9.5 6.25H4.5V7.5H9.5V6.25Z" fill="white"/>
                                                </svg>
                                            </span>
                                            ยื่นฟ้องคดีปกครองออนไลน์
                                        </Button>
                                    </Box>
                                </Box>
                            </Container>
                        </Box>
                        <Box className="thumb" data-aos="fade-in">
                            <Box component="figure" className="video-cover">
                                <video width="320" height="240" autoPlay loop muted playsInline preload="none">
                                    <source src={slide.vdoUrl} type="video/mp4" />
                                    <track
                                        src="/path/to/captions.vtt"
                                        kind="subtitles"
                                        srcLang="en"
                                        label="English"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            </Box>
                            {/* <Box component="figure" className="ratio">
                                <Image
                                    loader={imageLoader}
                                    src={slide.imageUrl}
                                    alt={slide.imageAlt}
                                    width={4156}
                                    height={1566}
                                    priority
                                />
                            </Box> */}
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="mouse">
                <div className="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6V10M12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9C5 5.13401 8.13401 2 12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <span className="txt">Scroll Down</span>
            </div>
        </Box>
    );
}
export default HeroBanner