"use client";

import React,{ useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import ListSCHead from "@/components/modules/list/sc-head";
import ListNav from "@/components/modules/list/nav";
import ListFilterTags2 from "@/components/modules/list/filter-tags2";
import AuctionForm from "@/components/core/auction-form";
import ListFilterSearch2 from "@/components/modules/list/filter-search2";
import ListItemDownloadTable from "@/components/modules/list/item-download-table";
import Pagination from "@/components/ui/pagination";

// scss
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";

// constant
import { PublicRelationsAnnouncementsAuctionSCHeadList } from "@/constant/index-list";
import { PublicRelationsNav } from "@/constant/index-list";
import { PublicRelationAnnouncementsTag } from "@/constant/index-list";
import { PublicRelationsAnnouncementsAuctionListItem } from "@/constant/index-list";

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
                <ListSCHead ListSCHeader={PublicRelationsAnnouncementsAuctionSCHeadList}/>
                <Box className="sc-body">
                    <Container className="container">
                        <div className="layout-list">
                            <ListNav ListNav={PublicRelationsNav}/>
                            <div className="layout-content">
                                <ListFilterTags2 listFilterTags={PublicRelationAnnouncementsTag}/>
                                <AuctionForm/>
                                <ListFilterSearch2/>
                                <ListItemDownloadTable ListDownloadTable={PublicRelationsAnnouncementsAuctionListItem} />
                                <Pagination/>
                            </div>
                        </div>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
