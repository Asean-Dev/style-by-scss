"use client";

import React,{ useEffect } from 'react';

// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';

import HeroBanner from "@/components/core/hero-banner";
import SectionAbout from "@/components/core/about-home";
import SectionNews from "@/components/core/news-home";
import SectionDocuments from "@/components/core/documents-home";
import BannerHome from "@/components/core/banner-home";

import "@/assets/scss/layouts/_main.scss";


export default function Home() {
    useEffect(() => {
        document.body.classList.remove('layout-inner');
    }, []);
    return (
        <>
            <HeroBanner/>
            {/* <SectionAbout/> */}
            {/* <SectionNews/> */}
            {/* <SectionDocuments/> */}
            {/* <BannerHome/> */}

            {/* <Box component="section" id="sectionName" className="section sc-name">
                <Box className="sc-inner">
                    <Container className="container">
                        <Box className="sc-head">
                            <Typography variant="h2" className="h2 title">
                                section head title
                            </Typography>
                            <Typography variant="body1" className="desc">
                                section head desc
                            </Typography>
                        </Box>
                        <Box className="sc-body">
                            <Typography variant="h3" className="h3 title">
                                section body title
                            </Typography>
                        </Box>
                    </Container>
                </Box>
            </Box> */}
        </>
    );
}
