"use client";

import React,{ useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import DetailSCHead from "@/components/modules/detail/sc-head";
import DetailInformation from "@/components/modules/detail/information";
import DetailDownload from "@/components/modules/detail/download";

// scss
import "@/assets/scss/components/_swiper.scss";
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";
import "@/assets/scss/modules/_detail.scss";

// constant
import { SearchInformationSCHeadDetail2 } from "@/constant/index-detail";
import { SearchInformationDetailAppointment } from "@/constant/index-detail";
import { SearchInformationDetailDownload } from "@/constant/index-detail";

export default function page_searchInformation_detail() {
    useEffect(() => {
        document.body.classList.add('layout-inner');
        return () => {
            document.body.classList.remove('layout-inner');
        };
    }, []);

    return (
        <>
            <Box component="section" id="detail" className="section sc-detail">
                <DetailSCHead DetailSCHeader={SearchInformationSCHeadDetail2}/>
                <Box className="sc-body">
                    <Container className="container">
                        <DetailInformation detailInformation={SearchInformationDetailAppointment}/>
                        <DetailDownload detailDownload={SearchInformationDetailDownload}/>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
