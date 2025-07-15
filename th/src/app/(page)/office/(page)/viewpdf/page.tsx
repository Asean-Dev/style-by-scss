"use client";

import React,{ useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import DetailSCHead from "@/components/modules/detail/sc-head";
import DetailViewPDF from "@/components/modules/detail/viewpdf";
import DetailInfo from "@/components/modules/detail/info";
import DetailDownload from "@/components/modules/detail/download";
import DetailOtherDownload from "@/components/modules/detail/other-download";

// scss
import "@/assets/scss/components/_swiper.scss";
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";
import "@/assets/scss/modules/_detail.scss";

// constant
import { OfficeSCHeadDetail } from "@/constant/index-detail";
import { OfficeDetailPDF } from "@/constant/index-detail";
import { OfficeDetailInfo } from "@/constant/index-detail";
import { OfficeDetailDownload } from "@/constant/index-detail";

export default function page_office_detail() {
    useEffect(() => {
        document.body.classList.add('layout-inner');
        return () => {
            document.body.classList.remove('layout-inner');
        };
    }, []);
    return (
        <>
            <Box component="section" id="detail" className="section sc-detail">
                <DetailSCHead DetailSCHeader={OfficeSCHeadDetail}/>
                <Box className="sc-body">
                    <Container className="container">
                        <DetailViewPDF detailPDF={OfficeDetailPDF}/>
                        <DetailInfo detailInfo={OfficeDetailInfo}/>
                        <DetailDownload detailDownload={OfficeDetailDownload}/>
                    </Container>
                    <DetailOtherDownload/>
                </Box>
            </Box>
        </>
    );
}
