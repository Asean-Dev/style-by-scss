"use client";

import React from 'react';
import Link from "next/link";

import Typography from '@mui/material/Typography';

// components
import IconADMC from "@/components/ui/icon-admc";

// types
import {LayoutListDownloadTable} from "@/types/list";

// scss
import "@/assets/scss/components/_button.scss";

type Props = {
    ListDownloadTable: LayoutListDownloadTable[],
}

export default function LayoutItemDownloadTable({ ListDownloadTable }: Props) {
    return (
        <>
            <div className="layout-item-table">
                <ul className="item-list">
                    {ListDownloadTable.map((item) => (
                        <li key={item.id}>
                            <div className="wrapper">
                                <Typography variant="h3" className="h5 h-title">
                                    <strong>{item.id}. {item.hTitle} <span className="color">{item.hNumber}</span></strong>
                                </Typography>
                                <div className="thumb">
                                    <IconADMC/>
                                </div>
                                {item.boxList && (
                                    <div className="content">
                                        {item.boxList.map((list) => (
                                            <div key={list.id} className="box">
                                                <div className="col-auto">
                                                    <Typography variant="h4" className="title">
                                                        <strong>{list.title}</strong>
                                                    </Typography>
                                                </div>
                                                <div className="col">
                                                    <Typography variant="body1" className="desc">
                                                        {list.desc}
                                                    </Typography>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div className="action">
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
