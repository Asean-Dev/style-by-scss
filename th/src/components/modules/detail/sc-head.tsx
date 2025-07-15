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
import Share from "@/components/modules/detail/share";

// libs
import {imageLoader} from "@/libs/imageLoader";

// types
import {detailSCHeader} from "@/types/detail";

type Props = {
    DetailSCHeader: detailSCHeader,
}

export default function DetailSCHead({ DetailSCHeader }: Props) {
    return (
        <Box className="sc-head">
            <Container className="container">
                <div className="content">
                    <div className="action">
                        <BtnBack/>
                        <strong className="tag">
                            {DetailSCHeader.tag}
                        </strong>
                    </div>
                    {DetailSCHeader.title &&(
                        <Typography variant="h1" className="h1 title">
                            {DetailSCHeader.title}
                        </Typography>
                    )}
                </div>
                {DetailSCHeader.date &&(
                    <div className="layout-info">
                        <small className="date">{DetailSCHeader.date}</small>
                        <Share/>
                    </div>
                )}
                {DetailSCHeader.blessTitle &&(
                    <div className="layout-info bless">
                        <Typography variant="h1" className="h1 title">
                            {DetailSCHeader.blessTitle}
                        </Typography>
                        <Share/>
                    </div>
                )}
            </Container>
            <div className="bg-cover">
                <Image className="cover-img"
                    loader={imageLoader}
                    src={DetailSCHeader.image}
                    alt={DetailSCHeader.tag}
                    width={2000}
                    height={466}
                    priority
                />
            </div>
            <div className="breadcrumbs">
                <ul className="item-list">
                    {DetailSCHeader.breadcrumbs.map((link) => (
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