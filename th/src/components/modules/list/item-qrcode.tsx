"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";

import Typography from '@mui/material/Typography';

import EastIcon from '@mui/icons-material/East';

// libs
import {imageLoader} from "@/libs/imageLoader";

// types
import {LayoutListItemsQRCode} from "@/types/list";

type Props = {
    ListItemsQRCode: LayoutListItemsQRCode[],
}

export default function LayoutItem({ ListItemsQRCode }: Props) {
    return (
        <>
            <div className="layout-item">
                <ul className="item-list qr-code">
                    {ListItemsQRCode.map((item) => (
                        <li key={item.id}>
                            <Link href={item.linkUrl} className="link qr" title={item.title}>
                                <div className="thumb">
                                    <figure className="ratio qr">
                                        <Image className="cover-img"
                                            loader={imageLoader}
                                            src={item.image}
                                            alt={item.title}
                                            width={370}
                                            height={518}
                                        />
                                    </figure>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
