"use client";

import React,{ useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import DetailSCHead from "@/components/modules/detail/sc-head";
import DetailGallery from "@/components/modules/detail/gallery";
import DetailCMS from "@/components/modules/detail/cms";
import DetailInfo from "@/components/modules/detail/info";
import DetailDownload from "@/components/modules/detail/download";
import DetailOther from "@/components/modules/detail/other";

// scss
import "@/assets/scss/components/_swiper.scss";
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";
import "@/assets/scss/modules/_detail.scss";

// constant
import { PublicRelationsSCHeadDetail } from "@/constant/index-detail";
import { PublicRelationsDetailCMS } from "@/constant/index-detail";
import { PublicRelationsDetailInfo } from "@/constant/index-detail";
import { PublicRelationsDetailDownload } from "@/constant/index-detail";

export default function page_publicRelations_detail() {
    useEffect(() => {
        document.body.classList.add('layout-inner');
        return () => {
            document.body.classList.remove('layout-inner');
        };
    }, []);

    return (
        <>
            <Box component="section" id="detail" className="section sc-detail">
                <DetailSCHead DetailSCHeader={PublicRelationsSCHeadDetail}/>
                <Box className="sc-body">
                    <Container className="container">
                        <DetailGallery/>
                        <DetailCMS detailCMS={PublicRelationsDetailCMS}/>
                        <DetailInfo detailInfo={PublicRelationsDetailInfo}/>
                        <DetailDownload detailDownload={PublicRelationsDetailDownload}/>
                    </Container>
                    <DetailOther/>
                </Box>
            </Box>
        </>
    );
}
