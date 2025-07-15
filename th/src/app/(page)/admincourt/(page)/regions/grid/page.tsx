"use client";

import React,{ useEffect } from 'react';
import Link from "next/link";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import ListSCHead from "@/components/modules/list/sc-head";
import ListNav from "@/components/modules/list/nav";
import ListFilterTags2 from "@/components/modules/list/filter-tags2";
import ListFilterLayout from "@/components/modules/list/filter-layout";
import ListItemsRegionsGrid from "@/components/modules/list/item-layout-grid";

// scss
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";
import "@/assets/scss/modules/_ck-editor.scss";

// constant
import { AdmincourtRegionsSCHeadList } from "@/constant/index-list";
import { AdmincourtNavList } from "@/constant/index-list";
import { AdmincourtRegionsTag } from "@/constant/index-list";
import { AdmincourtRegionsLayout } from "@/constant/index-list";
import { AdmincourtRegionsListItemGrid } from "@/constant/index-list";

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
                <ListSCHead ListSCHeader={AdmincourtRegionsSCHeadList}/>
                <Box className="sc-body">
                    <Container className="container">
                        <div className="layout-list">
                            <ListNav ListNav={AdmincourtNavList}/>
                            <div className="layout-content">
                                <div className="row">
                                    <div className="col">
                                        <ListFilterTags2 listFilterTags={AdmincourtRegionsTag}/>
                                    </div>
                                    <div className="col-auto">
                                        <ListFilterLayout listFilterLayout={AdmincourtRegionsLayout as any}/>
                                    </div>
                                </div>
                                <ListItemsRegionsGrid ListItemsGrid={AdmincourtRegionsListItemGrid} />
                            </div>
                        </div>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
