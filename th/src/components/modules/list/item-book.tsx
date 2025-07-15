"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";

import Typography from '@mui/material/Typography';

// scss
import "@/assets/scss/components/_button.scss";

// libs
import {imageLoader} from "@/libs/imageLoader";

// types
import {LayoutListItemBook} from "@/types/list";

type Props = {
    ListItemBook: LayoutListItemBook[],
}

export default function LayoutItem({ ListItemBook }: Props) {
    return (
        <>
            <div className="layout-item-book">
                <ul className="item-list">
                    {ListItemBook.map((item) => (
                        <li key={item.id}>
                            <div className="wrapper">
                                <div className="thumb">
                                    <figure className="ratio ratio-4x3">
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
                                    <div className="inner">
                                        <Typography variant="h3" className="h6 txt text-limit">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body1" className="desc text-limit">
                                            {item.desc}
                                        </Typography>
                                        <span className="date">{item.date}</span>
                                    </div>
                                    <div className="action">
                                        <Link href={item.linkUrl} className="btn btn-secondary outline" title="อ่านต่อ">อ่านต่อ</Link>
                                        <Link href={item.linkDownload} className="btn btn-secondary" title="ดาวน์โหลดเอกสาร">
                                            <div className="ic">
                                                <span className="feather icon-download"></span>
                                            </div>
                                            ดาวน์โหลดเอกสาร
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div> 
        </>
    );
}
