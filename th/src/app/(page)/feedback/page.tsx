"use client";

import React,{ useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import ListSCHead from "@/components/modules/list/sc-head";
import Feedback from "@/components/core/feedback";

// scss
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";
import "@/assets/scss/modules/_detail.scss";
import "@/assets/scss/modules/_feedback.scss";

// constant
import { FeedbackSCHeadList } from "@/constant/index-list";

export default function page_sitemap() {
    useEffect(() => {
        document.body.classList.add('layout-inner');
        return () => {
            document.body.classList.remove('layout-inner');
        };
    }, []);

    return (
        <>
            <Box component="section" id="list" className="section sc-list">
                <ListSCHead ListSCHeader={FeedbackSCHeadList}/>
                <Box className="sc-body">
                    <Container className="container">
                        <div className="layout-list">
                            <div className="layout-content">
                                <Feedback />
                            </div>
                        </div>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
