"use client";

import React,{ useEffect } from 'react';
import Link from "next/link";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import ListSCHead from "@/components/modules/list/sc-head";
import ListNav from "@/components/modules/list/nav";
import ListDownload from "@/components/modules/list/download";
import AboutCK from "@/components/modules/about/ck";

// scss
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";
import "@/assets/scss/modules/_ck-editor.scss";

// constant
import { AdmincourtSCHeadList } from "@/constant/index-list";
import { AdmincourtNavList } from "@/constant/index-list";
import { AdmincourtDownloadList } from "@/constant/index-list";

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
                <ListSCHead ListSCHeader={AdmincourtSCHeadList}/>
                <Box className="sc-body">
                    <Container className="container">
                        <div className="layout-list">
                            <ListNav ListNav={AdmincourtNavList}/>
                            <div className="layout-content">
                                <AboutCK/>
                                <ListDownload ListDownload={AdmincourtDownloadList}/>
                            </div>
                        </div>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
