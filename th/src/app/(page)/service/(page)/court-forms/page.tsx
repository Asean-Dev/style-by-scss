"use client";

import React,{ useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// components
import ListSCHead from "@/components/modules/list/sc-head";
import ListFilterTags from "@/components/modules/list/filter-tags";
import ListFilterSearch from "@/components/modules/list/filter-search";
import ListItemsNav from "@/components/modules/list/item-nav";
import ListItemDownloadThumb from "@/components/modules/list/item-download-thumb";

// scss
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";

// constant
import { ServiceCourtFormsSCHeadList } from "@/constant/index-list";
import { ServiceCourtFormsTag } from "@/constant/index-list";
import { ServiceCourtFormsNav } from "@/constant/index-list";
import { ServiceCourtFormsListItem } from "@/constant/index-list";

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
                <ListSCHead ListSCHeader={ServiceCourtFormsSCHeadList}/>
                <Box className="sc-body">
                    <Container className="container">
                        <div className="layout-list">
                            <div className="layout-content">
                                <div className="layout-duo-filter">
                                    <div className="row">
                                        <div className="col">
                                            <ListFilterTags listFilterTags={ServiceCourtFormsTag}/>
                                        </div>
                                        <div className="col">
                                            <ListFilterSearch/>
                                        </div>
                                    </div>
                                    <Typography variant="h2" className="h1 title">
                                        <strong>แบบพิมพ์เกี่ยวกับคดี</strong>
                                    </Typography>
                                </div>
                                <ListItemsNav ListItemNav={ServiceCourtFormsNav} />
                                <ListItemDownloadThumb listItemDownloadThumb={ServiceCourtFormsListItem} />
                            </div>
                        </div>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
