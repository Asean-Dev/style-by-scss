"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";

import Typography from '@mui/material/Typography';

import EastIcon from '@mui/icons-material/East';

// libs
import {imageLoader} from "@/libs/imageLoader";

// types
import {LayoutListItem} from "@/types/list";

type Props = {
    ListItem: LayoutListItem[],
}

export default function LayoutItem2({ ListItem }: Props) {
    return (
        <>
            <div className="layout-item">
                <ul className="item-list">
                    {ListItem.map((item) => (
                        <li key={item.id}>
                            <Link href={item.linkUrl} className="link"  title={item.title}>
                                {item.image && (
                                    <div className="thumb">
                                        <figure className="ratio book">
                                            <Image className="cover-img"
                                                loader={imageLoader}
                                                src={item.image}
                                                alt={item.title ?? 'List item image'}
                                                width={302}
                                                height={311}
                                            />
                                        </figure>
                                    </div>
                                )}
                                <div className="content">
                                    <span className="date">{item.date}</span>
                                    <Typography variant="h3" className="h6 txt text-limit">
                                        {item.title}
                                    </Typography>
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
