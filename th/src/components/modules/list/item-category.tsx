"use client";

import React from 'react';
import Link from "next/link";

import Typography from '@mui/material/Typography';

// components
import IconADMC from "@/components/ui/icon-admc";

// types
import {LayoutListCategory} from "@/types/list";

// scss
import "@/assets/scss/components/_button.scss";

type Props = {
    listItemCategory: LayoutListCategory[],
}

export default function LayoutItemCategory({ listItemCategory }: Props) {
    return (
        <>
            <div className="layout-item-category">
                <ul className="item-list">
                    {listItemCategory.map((item) => (
                        <li key={item.id}>
                            <Link href={item.linkUrl} className="link" title={item.txt}>
                                <div className="thumb">
                                    <IconADMC/>
                                </div>
                                <div className="text">
                                    <Typography variant="h2" className="h5 txt text-limit">
                                        <strong>{item.txt}</strong>
                                    </Typography>
                                </div>
                                <div className="icon">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 14L14 10M14 10L10 6M14 10H6M5.8 19H14.2C15.8802 19 16.7202 19 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C19 16.7202 19 15.8802 19 14.2V5.8C19 4.11984 19 3.27976 18.673 2.63803C18.3854 2.07354 17.9265 1.6146 17.362 1.32698C16.7202 1 15.8802 1 14.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19Z" stroke="#B18F30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
