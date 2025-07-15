"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";

import Typography from '@mui/material/Typography';

// scss
import "@/assets/scss/components/_button.scss";

// libs
import {imageLoader} from "@/libs/imageLoader";

// types
import type {ListHilight} from "@/types/list";

type Props = {
    listHilight: ListHilight[],
}

export default function ListHilight({ listHilight }: Props) {
    return (
        <>
            {listHilight.map((item) => (
                <div className="hilight" key={item.id}>
                    <div className="content">
                        {item.date &&(
                            <span className="date">{item.date}</span>
                        )}
                        {item.lang &&(
                            <span className="lang">{item.lang}</span>
                        )}
                        <Link href={item.linkUrl} className="link" title={item.title}>
                            <Typography variant="h2" className="h2 title text-limit">
                                {item.title}
                            </Typography>
                        </Link>
                        {item.translated && item.reference &&(
                            <ul className="tag-list">
                                <li><span className="tag">แปลโดย: {item.translated}</span></li>
                                <li><span className="tag">อ้างอิง: {item.reference}</span></li>
                            </ul>
                        )}
                        <Typography variant="body1" className="h5 desc text-limit">
                            {item.desc}
                        </Typography>
                        {item.positions && item.number &&(
                            <Typography variant="body1" className={`h5 desc -career`}>
                                <span>ตำแหน่ง : {item.positions}</span>
                                <span>{item.number} ตำแหน่ง</span>
                            </Typography>
                        )}
                        <div className={`action `}>
                            <Link href={item.linkUrl} className="btn btn-light outline" title="อ่านต่อ">อ่านต่อ</Link>
                            {item.subbtnLinkUrl && (
                                <Link href={item.subbtnLinkUrl} className="btn btn-secondary sub" title={item.subbtnTitle ?? ''}>{item.subbtnTitleText}</Link>
                            )}
                        </div>
                    </div>
                    <div className="thumb">
                        <Link href={item.linkUrl} className="link" title={item.title}>
                            <figure className="ratio ratio-4x3">
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
                </div>
            ))}
        </>
    )
}