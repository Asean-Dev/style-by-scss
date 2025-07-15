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

export default function DetailImageCover() {
    return (
        <div className="layout-gallery -bless">
            <Box component="figure" className="ratio ratio-16x9">
                <Image
                    loader={imageLoader}
                    src="/img/upload/bless.jpg"
                    alt="ลงนามถวายพระพรชัยมงคล สมเด็จพระนางเจ้า ฯ พระบรมราชินี เนื่องในโอกาสวันเฉลิมพระชนมพรรษา"
                    width={1640}
                    height={921}
                />
            </Box>
        </div>
    )
}