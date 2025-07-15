"use client";

import React,{ useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import ListSCHead from "@/components/modules/list/sc-head";
import OverviewItems from "@/components/modules/overview/item";

// scss
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_overview.scss";
import "@/assets/scss/modules/_list.scss";

// constant
import { ServiceGoodInformationSCHeadList } from "@/constant/index-list";
import { ServiceGoodInformationOverviewItem } from "@/constant/index-overview";

export default function page_publicRelations_list() {
    useEffect(() => {
        document.body.classList.add('layout-inner');
        return () => {
            document.body.classList.remove('layout-inner');
        };
    }, []);

    return (
        <>
            <Box component="section" id="list" className="section sc-overview sc-list">
                <ListSCHead ListSCHeader={ServiceGoodInformationSCHeadList}/>
                <Box className="sc-body">
                    <Container className="container">
                        <OverviewItems OverviewItem={ServiceGoodInformationOverviewItem} />
                    </Container>
                </Box>
            </Box>
        </>
    );
}
