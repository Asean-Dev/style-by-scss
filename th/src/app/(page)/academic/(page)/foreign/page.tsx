"use client";

import React,{ useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import ListSCHead from "@/components/modules/list/sc-head";
import ListNav from "@/components/modules/list/nav";
import ListHilight from "@/components/modules/list/hilight";
import ListFilterTags from "@/components/modules/list/filter-tags";
import ListFilterSearch from "@/components/modules/list/filter-search";
import ListItemDownloadThumb2 from "@/components/modules/list/item-download-thumb2";
import Pagination from "@/components/ui/pagination";

// scss
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";

// constant
import { AcademicForeignSCHeadList } from "@/constant/index-list";
import { AcademicNav } from "@/constant/index-list";
import { AcademicForeignHilight } from "@/constant/index-list";
import { AcademicForeignTag } from "@/constant/index-list";
import { AcademicForeignListItem } from "@/constant/index-list";

export default function page_publicRelations_list() {
    useEffect(() => {
        document.body.classList.add('layout-inner');
        return () => {
            document.body.classList.remove('layout-inner');
        };
    }, []);

    return (
        <>
            <Box component="section" id="list" className="section sc-list">
                <ListSCHead ListSCHeader={AcademicForeignSCHeadList}/>
                <Box className="sc-body">
                    <Container className="container">
                        <div className="layout-list">
                            <ListNav ListNav={AcademicNav}/>
                            <div className="layout-content">
                                <ListHilight listHilight={AcademicForeignHilight}/>
                                <ListFilterTags listFilterTags={AcademicForeignTag}/>
                                <ListFilterSearch/>
                                <ListItemDownloadThumb2 listItemDownloadThumb2={AcademicForeignListItem} />
                                <Pagination/>
                            </div>
                        </div>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
