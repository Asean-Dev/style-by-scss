"use client";

import React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// scss
import "@/assets/scss/modules/_detail.scss";

// libs
import {imageLoader} from "@/libs/imageLoader";

// types
import type {detailImageCover} from "@/types/detail";

type Props = {
    detailImageCover: detailImageCover,
}

export default function DetailImageCover({ detailImageCover }: Props) {
    return (
        <div className="layout-gallery -image-cover">
            <Image className="image-cover"
                loader={imageLoader}
                src={detailImageCover.url}
                alt={detailImageCover.alt}
                width={1633}
                height={1633}
            />
        </div>
    )
}