"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";

import Typography from '@mui/material/Typography';

// components
import IconPdf from "@/components/ui/icon-pdf";
import IconDoc from "@/components/ui/icon-doc";

// libs
import {imageLoader} from "@/libs/imageLoader";

// types
import {LayoutListDownloadThumb2} from "@/types/list";

// scss
import "@/assets/scss/components/_button.scss";

type Props = {
    listItemDownloadThumb2: LayoutListDownloadThumb2[],
}

export default function LayoutItemDownloadThumb({ listItemDownloadThumb2 }: Props) {
    return (
        <>
            <div className="layout-item-thumb layout-download translated">
                <ul className="item-list">
                    {listItemDownloadThumb2.map((item) => (
                        <li key={item.id} className="fluid">
                            <div className="wrapper">
                                <Link href={item.linkUrl} className="thumb" title={item.title}>
                                    <figure className="ratio ratio-1x1">
                                        <Image className="cover-img"
                                            loader={imageLoader}
                                            src={item.image}
                                            alt={item.title}
                                            width={180}
                                            height={180}
                                        />
                                    </figure>
                                </Link>
                                <div className="content">
                                    <div className="lang">{item.lang}</div>
                                    <Typography variant="h3" className="h6 title text-limit">
                                        <strong>{item.title}</strong>
                                    </Typography>
                                    <div className="box">
                                        <div className="item tag">แปลโดย: {item.translated}</div>
                                        <div className="item tag">อ้างอิง: {item.reference}</div>
                                    </div>
                                    <Typography variant="body1" className="desc text-limit">
                                        {item.desc}
                                    </Typography>
                                </div>
                                <div className="action content">
                                    <Link href={item.linkUrl} className="btn btn-secondary outline" title="อ่านต่อ">
                                        อ่านต่อ
                                    </Link>
                                    <Link href={item.btnUrl} className="btn btn-secondary" title="ดาวน์โหลดเอกสาร">
                                        <div className="ic">
                                            <span className="feather icon-download"></span>
                                        </div>
                                        ดาวน์โหลดเอกสาร
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
