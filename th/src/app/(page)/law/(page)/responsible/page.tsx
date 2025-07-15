"use client";

import React,{ useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import ListSCHead from "@/components/modules/list/sc-head";
import ListNav from "@/components/modules/list/nav";
import DetailHeadInfo from "@/components/modules/detail/head-info";
import DetailCMS from "@/components/modules/detail/cms";
import DetailViewPDF from "@/components/modules/detail/viewpdf";
import DetailInfo from "@/components/modules/detail/info";
import DetailDownload from "@/components/modules/detail/download";

// scss
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";
import "@/assets/scss/modules/_detail.scss";

// constant
import { LawResponsibleSCHeadList } from "@/constant/index-list";
import { LawNav } from "@/constant/index-list";
import { LawDetailHeadInfo } from "@/constant/index-detail";
import { LawDetailCMS } from "@/constant/index-detail";
import { LawDetailPDF } from "@/constant/index-detail";
import { LawDetailInfo } from "@/constant/index-detail";
import { LawResponsibleDownload } from "@/constant/index-list";

export default function page_law_list() {
    useEffect(() => {
        document.body.classList.add('layout-inner');
        return () => {
            document.body.classList.remove('layout-inner');
        };
    }, []);

    return (
        <>
            <Box component="section" id="list" className="section sc-list">
                <ListSCHead ListSCHeader={LawResponsibleSCHeadList}/>
                <Box className="sc-body">
                    <Container className="container">
                        <div className="layout-list">
                            <ListNav ListNav={LawNav}/>
                            <div className="layout-content">
                                <DetailHeadInfo detailHeadInfo={LawDetailHeadInfo}/>
                                <DetailCMS detailCMS={LawDetailCMS}/>
                                <DetailViewPDF detailPDF={LawDetailPDF}/>
                                <DetailInfo detailInfo={LawDetailInfo}/>
                                <DetailDownload detailDownload={LawResponsibleDownload}/>
                            </div>
                        </div>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
