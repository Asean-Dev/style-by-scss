"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";

import Typography from '@mui/material/Typography';

import EastIcon from '@mui/icons-material/East';

// scss
import "@/assets/scss/components/_button.scss";

// libs
import {imageLoader} from "@/libs/imageLoader";

// types
import {LayoutListItemGroup} from "@/types/list";

type Props = {
    ListItemGroup: LayoutListItemGroup[],
}

export default function LayoutItemGroup({ ListItemGroup }: Props) {
    return (
        <>
            <div className="layout-item-group">
                <ul className="order-list">
                    {ListItemGroup.map((item) => (
                        <li key={item.id} className="layout-item">
                            <Typography variant="h2" className="h2 title">
                                {item.title}
                            </Typography>
                            <ul className="item-list">
                                {item.orderlist.map((itemList) => (
                                    <li key={itemList.id} data-aos="fade-up">
                                        <Link href={itemList.linkUrl} className="link" title={itemList.title}>
                                            <div className="thumb">
                                                <figure className={`ratio ${itemList.imageType}`}>
                                                    <Image className="cover-img"
                                                        loader={imageLoader}
                                                        src={itemList.image}
                                                        alt={itemList.title}
                                                        width={302}
                                                        height={311}
                                                    />
                                                </figure>
                                            </div>
                                            <div className="content">
                                                <span className="date">{itemList.date}</span>
                                                <Typography variant="h3" className="h6 txt text-limit">
                                                    {itemList.title}
                                                </Typography>
                                                <span className="icon">
                                                    <EastIcon/>
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="action">
                                <Link href={item.linkUrl} className="btn btn-secondary outline fluid" title="ดูทั้งหมด">
                                    ดูทั้งหมด
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
