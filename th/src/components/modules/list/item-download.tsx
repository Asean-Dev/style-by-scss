"use client";

import React from 'react';
import Link from "next/link";

// components
import IconPdf from "@/components/ui/icon-pdf";
import IconDoc from "@/components/ui/icon-doc";

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
            <div className="layout-item-download layout-download">
                <ul className="item-list">
                    {ListItem.map((item) => (
                        <li key={item.id}>
                            <div className="wrapper">
                                {item.iconType &&(
                                    <div className={`icon ${item.iconType}`}>
                                        {item.iconType === 'pdf' && (
                                            <IconPdf/>
                                        )}
                                        {item.iconType === 'doc' && (
                                            <IconDoc/>
                                        )}
                                    </div>
                                )}
                                <div className="content">
                                    <span className="txt">
                                        {item.title}
                                    </span>
                                    <p className="date">{item.date}</p>
                                </div>
                                <div className="action">
                                    <Link href={item.linkUrl} className="btn btn-secondary" title="ดาวน์โหลด">
                                        <div className="ic">
                                            <span className="feather icon-download"></span>
                                        </div>
                                        ดาวน์โหลด
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
