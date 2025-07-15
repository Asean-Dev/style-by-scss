"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Import Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// scss
import "@/assets/scss/components/_button.scss";
import "@/assets/scss/components/_swiper.scss";
import "@/assets/scss/modules/_intro.scss";

// libs
import {imageLoader} from "@/libs/imageLoader";

interface BrandData {
    id: number;
    imageUrl: string;
    imageAlt: string;
    title: string;
    desc: string;
}
const brandData: BrandData[] = [
    {
        id: 1,
        imageUrl: '/img/static/logo.svg',
        imageAlt: 'ศาลปกครอง logo',
        title: 'ศาลปกครอง',
        desc: 'The Administrative Court',
    },
];
interface SlideData {
    id: number;
    imageUrl: string;
    imageAlt: string;
}
const slidesData: SlideData[] = [
    {
        id: 1,
        imageUrl: '/img/upload/intro.jpg',
        imageAlt: 'intro banner',
    },
    {
        id: 2,
        imageUrl: '/img/upload/intro.jpg',
        imageAlt: 'intro banner',
    },
    {
        id: 3,
        imageUrl: '/img/upload/intro.jpg',
        imageAlt: 'intro banner',
    },
];

export default function Index() {
    return (
        <>
            <main className="sc-intro">
                <Swiper
                    loop={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="sc-intro-swiper"
                >
                    {slidesData.map((slide) => (
                        <SwiperSlide key={slide.id}>
                                <Box className="image">
                                    <Box component="figure" className="ratio">
                                        <Image className="cover-img"
                                            loader={imageLoader}
                                            src={slide.imageUrl} 
                                            alt={slide.imageAlt}
                                            width={1920}
                                            height={829}
                                        />
                                    </Box>
                                </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="content">
                    {brandData.map((brandInfo) => (
                        <div className="logo" key={brandInfo.id}>
                            <Image className="logo-img"
                                loader={imageLoader}
                                src={brandInfo.imageUrl}
                                alt={brandInfo.imageAlt}
                                width={113}
                                height={147}
                                layout="responsive"
                                priority
                            />
                            <Box className="logo-text">
                                <Typography variant="body2" className="title">
                                    {brandInfo.title}
                                </Typography>
                                <Typography variant="caption" className="desc">
                                    {brandInfo.desc}
                                </Typography>
                            </Box>
                        </div>
                    ))}
                    <div className="action">
                        <Link href="/bless" className="btn btn-light" title="ลงนามถวายพระพร">
                            ลงนามถวายพระพร
                        </Link>
                        <Link href="/home" className="btn btn-light outline" title="เข้าสู่หน้าหลักศาลปกครอง">
                            เข้าสู่หน้าหลักศาลปกครอง
                            <span className="icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g >
                                        <path d="M9.99984 13.3332L13.3332 9.99984M13.3332 9.99984L9.99984 6.6665M13.3332 9.99984H6.6665M18.3332 9.99984C18.3332 14.6022 14.6022 18.3332 9.99984 18.3332C5.39746 18.3332 1.6665 14.6022 1.6665 9.99984C1.6665 5.39746 5.39746 1.6665 9.99984 1.6665C14.6022 1.6665 18.3332 5.39746 18.3332 9.99984Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath>
                                            <rect width="20" height="20" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
