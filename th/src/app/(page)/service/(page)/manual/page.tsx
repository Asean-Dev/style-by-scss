"use client";

import React,{ useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import DetailSCHead from "@/components/modules/detail/sc-head";
import DetailImageCover2 from "@/components/modules/detail/image-cover";
import DetailCMS from "@/components/modules/detail/cms";
import DetailInfo from "@/components/modules/detail/info";
import DetailDownload from "@/components/modules/detail/download";

// scss
import "@/assets/scss/components/_swiper.scss";
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";
import "@/assets/scss/modules/_detail.scss";

// constant
import { ServiceManualSCHeadDetail } from "@/constant/index-detail";
import { ServiceManualDetailImageCover } from "@/constant/index-detail";
import { ServiceManualDetailCMS } from "@/constant/index-detail";
import { ServiceManualDetailInfo } from "@/constant/index-detail";
import { ServiceManualDetailDownload } from "@/constant/index-detail";

export default function page_service_manual() {
    useEffect(() => {
        document.body.classList.add('layout-inner');
        return () => {
            document.body.classList.remove('layout-inner');
        };
    }, []);

    return (
        <>
            <Box component="section" id="detail" className="section sc-detail">
                <DetailSCHead DetailSCHeader={ServiceManualSCHeadDetail}/>
                <Box className="sc-body">
                    <Container className="container">
                        <DetailImageCover2 detailImageCover={ServiceManualDetailImageCover}/>
                        <DetailCMS detailCMS={ServiceManualDetailCMS}/>
                        <DetailInfo detailInfo={ServiceManualDetailInfo}/>
                        <DetailDownload detailDownload={ServiceManualDetailDownload}/>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
