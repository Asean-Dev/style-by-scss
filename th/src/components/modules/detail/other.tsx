"use client";

import React,{ useRef } from 'react';
import Link from "next/link";
import Image from 'next/image';

// Import Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import EastIcon from '@mui/icons-material/East';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// scss
import "@/assets/scss/components/_button.scss";

// libs
import {imageLoader} from "@/libs/imageLoader";

interface layoutItem {
    id: number;
    linkUrl: string;
    image: string;
    title: string;
}
const layoutItem: layoutItem[] = [
    { 
        id: 1, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/public-relations/detail'
    },
    { 
        id: 2, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/public-relations/detail'
    },
    { 
        id: 3, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/public-relations/detail'
    },
    { 
        id: 4, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/public-relations/detail'
    },
    { 
        id: 5, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/public-relations/detail'
    },
    { 
        id: 6, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/public-relations/detail'
    },
    { 
        id: 7, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/public-relations/detail'
    },
    { 
        id: 8, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/public-relations/detail'
    },
    { 
        id: 9, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/public-relations/detail'
    },
    { 
        id: 10, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/public-relations/detail'
    },
    { 
        id: 11, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/public-relations/detail'
    },
    { 
        id: 12, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/public-relations/detail'
    },
];

export default function DetailOther() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="layout-other">
            <Container className="container">
                <div className="head">
                    <Typography variant="h1" className="h2 title">
                        <strong>ข่าวอื่นที่เกี่ยวข้อง</strong>
                    </Typography>
                    <div className="action">
                        <Link href="/public-relations/list" className="btn btn-primary" title="ดูทั้งหมด">
                            ดูทั้งหมด
                        </Link>
                    </div>
                </div>
                <Swiper
                    navigation={{
                        prevEl: '.swiper-navigation .swiper-button-prev',
                        nextEl: '.swiper-navigation .swiper-button-next',
                    }}
                    loop={false}
                    slidesPerView={5}
                    spaceBetween={30}
                    modules={[Navigation]}
                    className="layout-other-swiper layout-item"
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {layoutItem.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Link href={item.linkUrl} className="link" title={item.title}>
                                <div className="thumb">
                                    <figure className="ratio ratio-4x3">
                                        <Image className="cover-img"
                                            loader={imageLoader}
                                            src={item.image}
                                            alt={item.title}
                                            width={302}
                                            height={209}
                                        />
                                    </figure>
                                </div>
                                <div className="content">
                                    <span className="date">10.02.2025</span>
                                    <Typography variant="h3" className="h6 txt text-limit">
                                        {item.title}
                                    </Typography>
                                    <span className="icon">
                                        <EastIcon/>
                                    </span>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-navigation">
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </Container>
        </div>
    )
}