"use client";

import React,{ useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import ListSCHead from "@/components/modules/list/sc-head";
import ListItemsQRCode from "@/components/modules/list/item-qrcode";

// scss
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";

// constant
import { ServiceLearningAreaSCHeadList } from "@/constant/index-list";
import { ServiceLearningAreaListItem } from "@/constant/index-list";

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
                <ListSCHead ListSCHeader={ServiceLearningAreaSCHeadList}/>
                <Box className="sc-body">
                    <Container className="container">
                        <div className="layout-list">
                            <div className="layout-content">
                                <ListItemsQRCode ListItemsQRCode={ServiceLearningAreaListItem} />
                            </div>
                        </div>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
