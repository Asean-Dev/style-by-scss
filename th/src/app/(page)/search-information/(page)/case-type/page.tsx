"use client";

import React,{ useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import ListSCHead from "@/components/modules/list/sc-head";
import ListItemCategory from "@/components/modules/list/item-category";

// scss
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";

// constant
import { SearchInformationCaseTypeListSCHeadList } from "@/constant/index-list";
import { SearchInformationCaseTypeListItem } from "@/constant/index-list";

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
                <ListSCHead ListSCHeader={SearchInformationCaseTypeListSCHeadList}/>
                <Box className="sc-body bg-gradient">
                    <Container className="container">
                        <div className="layout-list">
                            <div className="layout-content">
                                <ListItemCategory listItemCategory={SearchInformationCaseTypeListItem} />
                            </div>
                        </div>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
