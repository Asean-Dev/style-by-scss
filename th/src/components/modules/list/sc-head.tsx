"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// scss
import "@/assets/scss/components/_breadcrumb.scss";

// components
import BtnBack from "@/components/ui/btn-back";

// libs
import {imageLoader} from "@/libs/imageLoader";

// types
import {listSCHeader} from "@/types/list";

type Props = {
    ListSCHeader: listSCHeader,
}

export default function ListSCHead({ ListSCHeader }: Props) {
    return (
        <Box className="sc-head">
            <Container className="container">
                <div className="content">
                    <div className="action">
                        <BtnBack/>
                    </div>
                    <Typography variant="h1" className="title">
                        {ListSCHeader.title}
                    </Typography>
                </div>
            </Container>
            <div className="bg-cover">
                <Image className="cover-img"
                    loader={imageLoader}
                    src={ListSCHeader.image}
                    alt={ListSCHeader.title}
                    width={2000}
                    height={466}
                    priority
                />
            </div>
            <div className="breadcrumbs">
                <ul className="item-list">
                    {ListSCHeader.breadcrumbs.map((link) => (
                        <li key={link.id} className={link.status} data-aos="fade-up">
                            <Link href={link.linkUrl} className="link" title={link.title}>
                                {link.itemList}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Box>
    )
}