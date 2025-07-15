"use client";

import React,{ useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import DetailSCHead from "@/components/modules/detail/sc-head";
import DetailImageCover from "@/components/modules/detail/image-bless";
import BlessForm from "@/components/core/bless-form";

// scss
import "@/assets/scss/components/_swiper.scss";
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_detail.scss";

// constant
import { BlessSCHeadDetail } from "@/constant/index-detail";

export default function page_bless() {
    useEffect(() => {
        document.body.classList.add('layout-inner');
        return () => {
            document.body.classList.remove('layout-inner');
        };
    }, []);

    return (
        <>
            <Box component="section" id="bless" className="section sc-detail sc-bless">
                <DetailSCHead DetailSCHeader={BlessSCHeadDetail}/>
                <Box className="sc-body">
                    <Container className="container">
                        <DetailImageCover/>
                        <BlessForm/>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
