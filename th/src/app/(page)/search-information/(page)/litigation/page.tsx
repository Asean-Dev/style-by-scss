"use client";

import React,{ useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import ListSCHead from "@/components/modules/list/sc-head";
import SearchLitigationForm from "@/components/core/search-litigation-form";
import ListFilterSearch3 from "@/components/modules/list/filter-search3";
import ListItemDownloadSearch from "@/components/modules/list/item-download-search";
import Pagination from "@/components/ui/pagination";

// scss
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";

// constant
import { SearchInformationLitigationSCHeadList } from "@/constant/index-list";
import { SearchInformationLitigationListItem } from "@/constant/index-list";

export default function page_searchInformation_list() {
    useEffect(() => {
        document.body.classList.add('layout-inner');
        return () => {
            document.body.classList.remove('layout-inner');
        };
    }, []);

    return (
        <>
            <Box component="section" id="list" className="section sc-list">
                <ListSCHead ListSCHeader={SearchInformationLitigationSCHeadList}/>
                <Box className="sc-body bg-gradient">
                    <Container className="container">
                        <div className="layout-list">
                            <div className="layout-content">
                                <SearchLitigationForm/>
                                <ListFilterSearch3/>
                                <ListItemDownloadSearch listItemDownloadSearch={SearchInformationLitigationListItem} />
                                <Pagination/>
                            </div>
                        </div>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
