"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";

import Typography from '@mui/material/Typography';

import EastIcon from '@mui/icons-material/East';

// libs
import {imageLoader} from "@/libs/imageLoader";

// types
import {LayoutSitemap} from "@/types/list";

type Props = {
    ListSitemap: LayoutSitemap[],
}

export default function LayoutItem({ ListSitemap }: Props) {
    return (
        <>
            <div className="layout-sitemap">
                <ul className="sitemap-list">
                    {ListSitemap.map((item) => (
                        <li key={item.id}  className={item.box}>
                            <div className="wrapper">
                                <div className="head">
                                    <Typography variant="h3" className="h3 txt">
                                        {item.hTitle}
                                    </Typography>
                                </div>
                                <div className="body">
                                    <ul className="item-list">
                                        {item.itemSitemap.map((itemSitemap) => (
                                            <li key={itemSitemap.id}>
                                                <Link href={itemSitemap.linkUrl} className="link" title={itemSitemap.title}>
                                                    {itemSitemap.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
