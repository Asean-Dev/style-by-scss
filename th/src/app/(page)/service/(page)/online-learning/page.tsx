"use client";

import React,{ useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import OverviewSCHead from "@/components/modules/overview/sc-head";
import OverviewItems from "@/components/modules/overview/item";

// scss
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_overview.scss";

// constant
import { ServiceOnlineLearningSCHeadOverview } from "@/constant/index-overview";
import { ServiceOnlineLearningOverviewItem } from "@/constant/index-overview";

export default function page_service_index() {
    useEffect(() => {
        document.body.classList.add('layout-inner');
        return () => {
            document.body.classList.remove('layout-inner');
        };
    }, []);
    
    return (
        <>
            <Box component="section" id="overview" className="section sc-overview">
                <OverviewSCHead OverviewSCHeader={ServiceOnlineLearningSCHeadOverview}/>
                <Box className="sc-body">
                    <Container className="container">
                        <OverviewItems OverviewItem={ServiceOnlineLearningOverviewItem} />
                    </Container>
                </Box>
            </Box>
        </>
    );
}
