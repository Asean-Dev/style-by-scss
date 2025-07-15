"use client";

import React,{ useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import ListSCHead from "@/components/modules/list/sc-head";
import ListNav from "@/components/modules/list/nav";
import DetailCMS from "@/components/modules/detail/cms";
import ListItemsSlide from "@/components/modules/list/item-slide";

// scss
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";
import "@/assets/scss/modules/_detail.scss";
import "@/assets/scss/modules/_ck-editor.scss";

// constant
import { OfficeCultureSCHeadList } from "@/constant/index-list";
import { OfficeNavList } from "@/constant/index-list";
import { OfficeCultureDetailCMS } from "@/constant/index-detail";
import { OfficeCultureListItem } from "@/constant/index-list";

export default function page_office_list() {
    useEffect(() => {
        document.body.classList.add('layout-inner');
        return () => {
            document.body.classList.remove('layout-inner');
        };
    }, []);

    return (
        <>
            <Box component="section" id="list" className="section sc-list">
                <ListSCHead ListSCHeader={OfficeCultureSCHeadList}/>
                <Box className="sc-body">
                    <Container className="container">
                        <div className="layout-list">
                            <ListNav ListNav={OfficeNavList}/>
                            <div className="layout-content">
                                <DetailCMS detailCMS={OfficeCultureDetailCMS}/>
                                <ListItemsSlide ListItemSlide={OfficeCultureListItem} />
                            </div>
                        </div>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
