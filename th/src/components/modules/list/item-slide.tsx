"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";

import Typography from '@mui/material/Typography';

// Import Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// icon
import EastIcon from '@mui/icons-material/East';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// scss
import "@/assets/scss/components/_swiper.scss";

// libs
import {imageLoader} from "@/libs/imageLoader";

// types
import {LayoutListItemSlide} from "@/types/list";

type Props = {
    ListItemSlide: LayoutListItemSlide[],
}

export default function LayoutItemSlide({ ListItemSlide }: Props) {
    return (
        <>
            <div className="layout-item layout-item-slide">
                <ul className="item-list">
                    {ListItemSlide.map((item) => (
                        <li key={item.id}>
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={4}
                                navigation={{ 
                                    nextEl: ` .swiper-button-next`, 
                                    prevEl: ` .swiper-button-prev`
                                }}
                                modules={[Navigation]}
                                className="slide"
                            >
                                <div className="layout-action text">
                                    <div className="inner">
                                        <div className={`swiper-button-prev`}></div>
                                        <Typography variant="body2" className="h4 title">
                                            {item.hTitle}
                                        </Typography>
                                        <div className={`swiper-button-next`}></div>
                                    </div>
                                </div>
                                <div className="swiper-wrapper">
                                    {item.itemSlide.map((slide) => (
                                        <SwiperSlide key={slide.id}>
                                            <Link href={slide.linkUrl} className="link"  title={slide.title}>
                                                <div className="thumb">
                                                    <figure className="ratio ratio-4x3">
                                                        <Image className="cover-img"
                                                            loader={imageLoader}
                                                            src={slide.image}
                                                            alt={slide.title}
                                                            width={302}
                                                            height={209}
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="content">
                                                    <span className="date">{slide.date}</span>
                                                    <Typography variant="h3" className="h6 txt text-limit">
                                                        {slide.title}
                                                    </Typography>
                                                    <span className="icon">
                                                        <EastIcon/>
                                                    </span>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                    ))}
                                </div>
                            </Swiper>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
