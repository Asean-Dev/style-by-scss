"use client";

import React,{ useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import ListSCHead from "@/components/modules/list/sc-head";
import ListNav from "@/components/modules/list/nav";
import ListFilterSearch from "@/components/modules/list/filter-search";
import ListItemsNav from "@/components/modules/list/item-nav";
import ListItemDownloadThumb from "@/components/modules/list/item-download-thumb";
import Pagination from "@/components/ui/pagination";

// scss
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";

// constant
import { LawAboutSCHeadList } from "@/constant/index-list";
import { LawNav } from "@/constant/index-list";
import { LawAboutNav } from "@/constant/index-list";
import { LawAboutListItem } from "@/constant/index-list";

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
                <ListSCHead ListSCHeader={LawAboutSCHeadList}/>
                <Box className="sc-body">
                    <Container className="container">
                        <div className="layout-list">
                            <ListNav ListNav={LawNav}/>
                            <div className="layout-content">
                                <ListFilterSearch/>
                                <ListItemsNav ListItemNav={LawAboutNav} />
                                <ListItemDownloadThumb listItemDownloadThumb={LawAboutListItem} />
                                <Pagination/>
                            </div>
                        </div>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
