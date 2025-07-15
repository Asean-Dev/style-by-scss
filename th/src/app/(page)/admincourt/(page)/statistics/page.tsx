"use client";

import React,{ useEffect } from 'react';
import Link from "next/link";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import ListSCHead from "@/components/modules/list/sc-head";
import ListNav from "@/components/modules/list/nav";
import ListItemsAccordion from "@/components/modules/list/item-accordion";
import ListDownload from "@/components/modules/list/download";

// scss
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";

// constant
import { AdmincourtStatisticsSCHeadList } from "@/constant/index-list";
import { AdmincourtNavList } from "@/constant/index-list";
import { AdmincourtStatisticsListItemList } from "@/constant/index-list";
import { AdmincourtDownloadList } from "@/constant/index-list";

export default function page_admincourt_list() {
    useEffect(() => {
        document.body.classList.add('layout-inner');
        return () => {
            document.body.classList.remove('layout-inner');
        };
    }, []);

    return (
        <>
            <Box component="section" id="list" className="section sc-list">
                <ListSCHead ListSCHeader={AdmincourtStatisticsSCHeadList}/>
                <Box className="sc-body">
                    <Container className="container">
                        <div className="layout-list">
                            <ListNav ListNav={AdmincourtNavList}/>
                            <div className="layout-content">
                                <ListItemsAccordion ListAccordion={AdmincourtStatisticsListItemList} />
                                <ListDownload ListDownload={AdmincourtDownloadList}/>
                            </div>
                        </div>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
