"use client";

import React,{ useEffect } from 'react';
import Image from 'next/image';
import Link from "next/link";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// components
import SearchSCHead from "@/components/modules/search/sc-head";
import SearchFilter from "@/components/modules/search/filter";
import SearchItem from "@/components/modules/search/item";
import Pagination from "@/components/ui/pagination";

// scss
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";
import "@/assets/scss/modules/_search.scss";

export default function page_search_index() {
    useEffect(() => {
        document.body.classList.add('layout-inner');
        return () => {
            document.body.classList.remove('layout-inner');
        };
    }, []);
    return (
        <>
            <Box component="section" id="search" className="section sc-search">
                <SearchSCHead/>
                <Box className="sc-body layout-content">
                    <Container className="container">
                        <SearchFilter/>
                        <SearchItem/>
                        <Pagination/>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
