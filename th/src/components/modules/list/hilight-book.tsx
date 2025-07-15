"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";

import Typography from '@mui/material/Typography';

// scss
import "@/assets/scss/components/_button.scss";

// libs
import {imageLoader} from "@/libs/imageLoader";

interface ListHilightBook {
    id: number;
    linkUrl: string;
    linkDownload: string;
    imageUrl: string;
    date: string;
    title: string;
    desc: string;
}
const listHilightBook: ListHilightBook[] = [
    {
        id: 1,
        linkUrl: '/office/viewpdf',
        linkDownload: '',
        imageUrl: '/img/upload/book2.jpg',
        date: '15 มกราคม 2567',
        title: 'ผลการสำรวจความเชื่อมั่นของประชาชนต่อศาลปกครอง ประจำปีงบประมาณ พ.ศ. 2567',
        desc: 'ผลการสำรวจความเชื่อมั่นของประชาชนต่อศาลปกครอง ประจำปีงบประมาณ พ.ศ. 2567',
    },
];

export default function ListHilightBook() {
    return (
        <>
            {listHilightBook.map((item) => (
                <div className="hilight-book" key={item.id}>
                    <div className="thumb">
                        <Link href={item.linkUrl} className="link" title={item.title}>
                            <figure className="ratio">
                                <Image className="cover-img"
                                    loader={imageLoader}
                                    src={item.imageUrl}
                                    alt={item.title}
                                    width={640}
                                    height={460}
                                />
                            </figure>
                        </Link>
                    </div>
                    <div className="content">
                        <Link href={item.linkUrl} className="link" title={item.title}>
                            <Typography variant="h2" className="h2 title text-limit">
                                {item.title}
                            </Typography>
                        </Link>
                        <Typography variant="body1" className="desc text-limit">
                            {item.desc}
                        </Typography>
                        <div className="action">
                            <div className="list">
                                <Link href={item.linkUrl} className="btn btn-light outline" title="อ่านต่อ">อ่านต่อ</Link>
                                <Link href={item.linkDownload} className="btn btn-secondary" title="ดาวน์โหลดเอกสาร">
                                    <div className="ic">
                                        <span className="feather icon-download"></span>
                                    </div>
                                    ดาวน์โหลดเอกสาร
                                </Link>
                            </div>
                            <span className="date">เผยแพร่: {item.date}</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}