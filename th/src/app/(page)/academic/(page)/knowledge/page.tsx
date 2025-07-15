"use client";

import React,{ useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import ListSCHead from "@/components/modules/list/sc-head";
import ListNav from "@/components/modules/list/nav";
import ListHilight from "@/components/modules/list/hilight";
import ListFilterSearch from "@/components/modules/list/filter-search";
import ListItems2 from "@/components/modules/list/item2";
import Pagination from "@/components/ui/pagination";

// scss
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";

// constant
import { AcademicKnowledgeSCHeadList } from "@/constant/index-list";
import { AcademicNav } from "@/constant/index-list";
import { AcademicArticlesCaseHilight } from "@/constant/index-list";
import { AcademicArticlesListItem } from "@/constant/index-list";

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
                <ListSCHead ListSCHeader={AcademicKnowledgeSCHeadList}/>
                <Box className="sc-body">
                    <Container className="container">
                        <div className="layout-list">
                            <ListNav ListNav={AcademicNav}/>
                            <div className="layout-content">
                                <ListHilight listHilight={AcademicArticlesCaseHilight}/>
                                <ListFilterSearch/>
                                <ListItems2 ListItem={AcademicArticlesListItem} />
                                <Pagination/>
                            </div>
                        </div>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
