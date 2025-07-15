"use client";

import React from 'react';
import Link from "next/link";

import Typography from '@mui/material/Typography';

// icon
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

// scss
import "@/assets/scss/components/_button.scss";

// types
import {LayoutListItem} from "@/types/list";

type Props = {
    ListItem: LayoutListItem[],
}

export default function LayoutItem({ ListItem }: Props) {
    return (
        <>
            <div className="layout-item -career">
                <ul className="item-list">
                    {ListItem.map((item) => (
                        <li key={item.id}>
                            <div className="content">
                                <span className="date">{item.date}</span>
                                <Link href={item.linkUrl} className="link -text"  title={item.title}>
                                    <Typography variant="h3" className="h6 txt text-limit">
                                        {item.title}
                                    </Typography>
                                </Link>
                                <Typography variant="body1" className={`desc`}>
                                    ตำแหน่ง : {item.positions}
                                    <br />
                                    {item.number} ตำแหน่ง
                                </Typography>
                                <div className="action">
                                    {item.btnUrl && item.btn && (
                                        <Link href={item.btnUrl} className="btn btn-secondary fluid" title={item.btn}>
                                            <WorkOutlineIcon/>
                                            {item.btn}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
