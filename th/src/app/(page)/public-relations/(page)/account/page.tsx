"use client";

import React,{ useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import ListSCHead from "@/components/modules/list/sc-head";
import ListNav from "@/components/modules/list/nav";
import ListItemsGroupList from "@/components/modules/list/item-group-list";
import DetailInfo from "@/components/modules/detail/info";
import DetailDownload from "@/components/modules/detail/download";

// scss
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";
import "@/assets/scss/modules/_detail.scss";

// constant
import { PublicRelationsAccountSCHeadList } from "@/constant/index-list";
import { PublicRelationsNav } from "@/constant/index-list";
import { PublicRelationsAccountListItem } from "@/constant/index-list";
import { PublicRelationsDetailInfo } from "@/constant/index-detail";
import { PublicRelationsAccountDownload } from "@/constant/index-list";

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
                <ListSCHead ListSCHeader={PublicRelationsAccountSCHeadList}/>
                <Box className="sc-body">
                    <Container className="container">
                        <div className="layout-list">
                            <ListNav ListNav={PublicRelationsNav}/>
                            <div className="layout-content">
                                <ListItemsGroupList ListItemGroupList={PublicRelationsAccountListItem} />
                                <DetailInfo detailInfo={PublicRelationsDetailInfo}/>
                                <DetailDownload detailDownload={PublicRelationsAccountDownload}/>
                            </div>
                        </div>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
