"use client";

import React,{ useState } from 'react';
import Image from 'next/image';

// Import Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';

import Box from '@mui/material/Box';
// components
import Fancybox from '@/components/ui/Fancybox';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// scss
import "@/assets/scss/components/_swiper.scss";
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";
import "@/assets/scss/modules/_detail.scss";

// libs
import {imageLoader} from "@/libs/imageLoader";

interface SlidesHilight {
    id: number;
    linkUrl: string;
    imageUrl: string;
    imageAlt: string;
}
const slidesHilight: SlidesHilight[] = [
    {
        id: 1,
        linkUrl: '',
        imageUrl: '/img/upload/news.jpg',
        imageAlt: 'alt image',
    },
    {
        id: 2,
        linkUrl: '',
        imageUrl: '/img/upload/news.jpg',
        imageAlt: 'alt image',
    },
    {
        id: 3,
        linkUrl: '',
        imageUrl: '/img/upload/news.jpg',
        imageAlt: 'alt image',
    },
    {
        id: 4,
        linkUrl: '',
        imageUrl: '/img/upload/news.jpg',
        imageAlt: 'alt image',
    },
    {
        id: 5,
        linkUrl: '',
        imageUrl: '/img/upload/news.jpg',
        imageAlt: 'alt image',
    },
    {
        id: 6,
        linkUrl: '',
        imageUrl: '/img/upload/news.jpg',
        imageAlt: 'alt image',
    },
];

export default function DetailGallery() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    return (
        <div className="layout-gallery">
            <Fancybox
            options={{
                Carousel: {
                    infinite: false,
                },
            }}
        >
            <Swiper
                spaceBetween={16}
                slidesPerView={1}
                thumbs={{ swiper: thumbsSwiper }}
                navigation={true}
                modules={[Thumbs, Navigation]}
                className="layout-gallery-main"
            >
                {slidesHilight.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <a className="thumb" data-fancybox="gallery" href={slide.imageUrl} title={slide.imageAlt}>
                            <Box component="figure" className="ratio ratio-16x9">
                                <Image
                                    loader={imageLoader}
                                    src={slide.imageUrl}
                                    alt={slide.imageAlt}
                                    width={1610}
                                    height={905}
                                />
                            </Box>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Fancybox>
        <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            slidesPerView={4}
            spaceBetween={30}
            modules={[Thumbs]}
            watchSlidesProgress={true}
            className="layout-gallery-thumb"
        >
            {slidesHilight.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div className="thumb">
                        <Box component="figure" className="ratio ratio-16x9">
                            <Image
                                loader={imageLoader}
                                src={slide.imageUrl}
                                alt={slide.imageAlt}
                                width={380}
                                height={215}
                            />
                        </Box>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
    )
}