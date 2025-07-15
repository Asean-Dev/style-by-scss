"use client";

import React,{ useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import ListSCHead from "@/components/modules/list/sc-head";
import ListNav from "@/components/modules/list/nav";
import ListItemsNav from "@/components/modules/list/item-nav";
import ListHilightBook from "@/components/modules/list/hilight-book";
import ListFilterSearch from "@/components/modules/list/filter-search";
import ListItemsBook from "@/components/modules/list/item-book";
import Pagination from "@/components/ui/pagination";

// scss
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";

// constant
import { AcademicJournalSCHeadList } from "@/constant/index-list";
import { AcademicNav } from "@/constant/index-list";
import { AcademicJournalNav } from "@/constant/index-list";
import { AcademicListItemBookJournal } from "@/constant/index-list";

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
                <ListSCHead ListSCHeader={AcademicJournalSCHeadList}/>
                <Box className="sc-body">
                    <Container className="container">
                        <div className="layout-list">
                            <ListNav ListNav={AcademicNav}/>
                            <div className="layout-content">
                                <ListItemsNav ListItemNav={AcademicJournalNav} />
                                <ListHilightBook/>
                                <ListFilterSearch/>
                                <ListItemsBook ListItemBook={AcademicListItemBookJournal} />
                                <Pagination/>
                            </div>
                        </div>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
