"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";

import Typography from '@mui/material/Typography';

import EastIcon from '@mui/icons-material/East';

// libs
import {imageLoader} from "@/libs/imageLoader";

// types
import {LayoutListItemsGrid} from "@/types/list";

type Props = {
    ListItemsGrid: LayoutListItemsGrid[],
}

export default function LayoutItem({ ListItemsGrid }: Props) {
    return (
        <>
            <div className="layout-item-regions">
                <ul className="item-list">
                    {ListItemsGrid.map((item) => (
                        <li key={item.id} className="grid">
                            <Link href={item.linkUrl} className="link"  title={item.title}>
                                <div className="thumb">
                                    <figure className="ratio ratio-3x2">
                                        <Image className="cover-img"
                                            loader={imageLoader}
                                            src={item.image}
                                            alt={item.title}
                                            width={302}
                                            height={209}
                                        />
                                    </figure>
                                </div>
                                <div className="content">
                                    <div className="text">
                                        <Typography variant="h2" className="txt">
                                            ศาลปกครอง
                                        </Typography>
                                        <Typography variant="h3" className="desc">
                                            {item.title}
                                        </Typography>
                                    </div>
                                    <span className="icon">
                                        <EastIcon/>
                                    </span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
