"use client";

import React,{ useRef } from 'react';
import Link from "next/link";

// components
import IconPdf from "@/components/ui/icon-pdf";

// Import Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// scss
import "@/assets/scss/components/_button.scss";

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
        linkUrl: '/office/viewpdf'
    },
    { 
        id: 2, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/office/viewpdf'
    },
    { 
        id: 3, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/office/viewpdf'
    },
    { 
        id: 4, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/office/viewpdf'
    },
    { 
        id: 5, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/office/viewpdf'
    },
    { 
        id: 6, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/office/viewpdf'
    },
    { 
        id: 7, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/office/viewpdf'
    },
    { 
        id: 8, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/office/viewpdf'
    },
    { 
        id: 9, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/office/viewpdf'
    },
    { 
        id: 10, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/office/viewpdf'
    },
    { 
        id: 11, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/office/viewpdf'
    },
    { 
        id: 12, 
        image: '/img/upload/news.jpg', 
        title: 'ประธานศาลปกครองสูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นธรรม รวดเร็ว พร้อมยกระดับการปฏิบัติงานด้วยเทคโนโลยี ก้าวสู่ศาลปกครองอิเล็กทรอนิกส์ที่สมบูรณ์', 
        linkUrl: '/office/viewpdf'
    },
];

export default function DetailOtherDownload() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="layout-other">
            <Container className="container">
                <div className="head">
                    <Typography variant="h1" className="h2 title">
                        <strong>ข่าวอื่นที่เกี่ยวข้อง</strong>
                    </Typography>
                    <div className="action">
                        <Link href="/office/list" className="btn btn-primary" title="ดูทั้งหมด">
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
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    modules={[Navigation]}
                    className="layout-other-swiper layout-download"
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {[0, 1, 2, 3,].map((item) => (
                        <SwiperSlide key={`${item}`}>
                            <div className="wrapper">
                                <div className="icon pdf">
                                    <IconPdf/>
                                </div>
                                <div className="content">
                                    <span className="txt">
                                        สรุปผลการดำเนินการจัดซื้อจัดจ้างในรอบเดือนเมษายน2568ของสำนักงานศาลปกครองยะลา
                                    </span>
                                    <p className="date">10.02.2025</p>
                                </div>
                                <div className="action">
                                    <Link href="#" className="btn btn-secondary" title="ดาวน์โหลด">
                                        <div className="ic">
                                            <span className="feather icon-download"></span>
                                        </div>
                                        ดาวน์โหลด
                                    </Link>
                                </div>
                            </div>
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