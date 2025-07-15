"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";

import Typography from '@mui/material/Typography';

import EastIcon from '@mui/icons-material/East';

// libs
import {imageLoader} from "@/libs/imageLoader";

// types
import {LayoutListItemsList} from "@/types/list";

type Props = {
    ListItemsList: LayoutListItemsList[],
}

export default function LayoutItem({ ListItemsList }: Props) {
    return (
        <>
            <div className="layout-item-regions">
                <ul className="item-list">
                    {ListItemsList.map((item) => (
                        <li key={item.id} className="list">
                            <div className="wrapper">
                                <Link href={item.linkUrl} className="thumb" title={item.title}>
                                    <figure className="ratio ratio-3x2">
                                        <Image className="cover-img"
                                            loader={imageLoader}
                                            src={item.image}
                                            alt={item.title}
                                            width={302}
                                            height={209}
                                        />
                                    </figure>
                                </Link>
                                <div className="content">
                                    <div className="text">
                                        <Typography variant="h2" className="txt">
                                            ศาลปกครอง{item.title}
                                        </Typography>
                                        <div className="box">
                                            <div className="item">
                                                <div className="icon">
                                                    <span className="feather icon-map"></span>
                                                </div>
                                                <Typography variant="body1" className="desc">
                                                    {item.desc}
                                                </Typography>
                                            </div>
                                            <div className="item">
                                                <div className="icon">
                                                    <span className="feather icon-phone-call"></span>
                                                </div>
                                                <Typography variant="body1" className="desc">
                                                    โทรศัพท์ : <Link href={`tel:${item.phone}`} className="link" title={item.phone}>
                                                        {item.phone}
                                                    </Link> , โทรสาร : {item.fax}
                                                </Typography>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="action">
                                    <Link href={item.linkUrl} className="btn btn-secondary" title="ดูเว็บไซต์">
                                        <span className="feather icon-link"></span>
                                        ดูเว็บไซต์
                                    </Link>
                                    <Link href={item.btnUrl} className="btn btn-secondary outline" title="นำทาง">
                                        <span className="feather icon-map"></span>
                                        นำทาง
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
