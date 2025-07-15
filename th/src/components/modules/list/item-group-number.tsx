"use client";

import React from 'react';
import Link from "next/link";

import Typography from '@mui/material/Typography';

// components
import IconPdf from "@/components/ui/icon-pdf";
import IconDoc from "@/components/ui/icon-doc";

// scss
import "@/assets/scss/components/_button.scss";

// types
import {LayoutListItemGroupNumber} from "@/types/list";

type Props = {
    ListItemGroupNumber: LayoutListItemGroupNumber[],
}

export default function LayoutItemGroup({ ListItemGroupNumber }: Props) {
    return (
        <>
            <div className="layout-item-groupnumber">
                <ul className="item-list">
                    {ListItemGroupNumber.map((itemList) => (
                        <li key={itemList.id} data-aos="fade-up" className="layout-download">
                            <div className="wrapper">
                                <div className="number">
                                    <strong className="txt">เลขหมวด</strong>
                                    <strong className="desc">{itemList.numtxt}</strong>
                                </div>
                                {itemList.iconType &&(
                                    <div className={`icon ${itemList.iconType}`}>
                                        {itemList.iconType === 'pdf' && (
                                            <IconPdf/>
                                        )}
                                        {itemList.iconType === 'doc' && (
                                            <IconDoc/>
                                        )}
                                    </div>
                                )}
                                <div className="content">
                                    <Typography variant="h3" className="txt text-limit">
                                        {itemList.title}
                                    </Typography>
                                    <div className="info">
                                        <div className="item">
                                            <strong className="txt">เล่มที่่</strong>
                                            <strong className="desc">{itemList.book}</strong>
                                        </div>
                                        <div className="item">
                                            <strong className="txt">ตอนที่</strong>
                                            <strong className="desc">{itemList.episode}</strong>
                                        </div>
                                        <div className="item">
                                            <strong className="txt">วันที่ประกาศลงในราชกิจจาฯ</strong>
                                            <strong className="release">{itemList.date}</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="action">
                                    <Link href={itemList.linkUrl} className="btn btn-secondary outline" title="อ่านต่อ">
                                        อ่านต่อ
                                    </Link>
                                    <Link href={itemList.btnUrl} className="btn btn-secondary" title="ดาวน์โหลดเอกสาร">
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
