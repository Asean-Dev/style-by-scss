"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

// icon
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search'; 

// scss
import "@/assets/scss/components/_breadcrumb.scss";

// libs
import {imageLoader} from "@/libs/imageLoader";

// types
import {overviewSCHeader} from "@/types/overview";

type Props = {
    OverviewSCHeader: overviewSCHeader,
}

export default function OverviewSCHead({ OverviewSCHeader }: Props) {
  return (
    <Box className="sc-head">
        <Container className="container">
            <div className="content">
                <div className="breadcrumbs">
                    <ul className="item-list">
                        {OverviewSCHeader.breadcrumbs.map((link) => (
                            <li key={link.id} className={link.status} data-aos="fade-up">
                                <Link href={link.linkUrl} className="link" title={link.title}>
                                    {link.itemList}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Typography variant="h1" className="title">
                    {OverviewSCHeader.title}
                </Typography>
                <Typography variant="h2" className="h4 desc">
                    {OverviewSCHeader.desc}
                </Typography>
                <div className={`search ${OverviewSCHeader.search}`}>
                    <div className="box">
                        <div className="icon">
                            <span className="feather icon-search"></span>
                        </div>
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="ค้นหา..."
                            className="search-input"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            href="/search"
                                            className="link btn-search"
                                            title="ค้นหา"
                                            aria-label="ค้นหา"
                                        >
                                            <SearchIcon />
                                            ค้นหา
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            autoFocus
                        />
                    </div>
                </div>
            </div>
        </Container>
        <div className="bg-cover">
            <Image className="cover-img"
                loader={imageLoader}
                src={OverviewSCHeader.image}
                alt={OverviewSCHeader.title}
                width={2000}
                height={466}
                priority
            />
        </div>
    </Box>
  )
}