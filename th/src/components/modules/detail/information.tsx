"use client";

import React from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

// libs
import {imageLoader} from "@/libs/imageLoader";

// types
import type {detailInformation} from "@/types/detail";

type Props = {
    detailInformation: detailInformation,
}

export default function DetailInformation({ detailInformation }: Props) {
    return (
        <div className="layout-information">
            <div className="inner">
                <div className="head">
                    <Typography variant="h1" className="h4 title">
                        {detailInformation.dataList &&(
                            <strong>{detailInformation.title}</strong>
                        )}
                        {detailInformation.titleColor &&(
                            <strong className="color">{detailInformation.titleColor}</strong>
                        )}
                    </Typography>
                    {(detailInformation.tagBlack || detailInformation.tagRed) &&(
                        <div className="tag">
                            {detailInformation.tagBlack &&(
                                <div className="item black">{detailInformation.tagBlack}</div>
                            )}
                            {detailInformation.tagRed &&(
                                <div className="item red">{detailInformation.tagRed}</div>
                            )}
                        </div>
                    )}
                </div>
                <div className="body">
                    {detailInformation.dataList &&(
                        <div className="data-list">
                            {detailInformation.dataList.map((item) => (
                                <div key={item.id} className="item">
                                    <div className="sub">
                                        <strong>{item.title} :</strong>
                                    </div>
                                    <div className="desc">
                                        <strong>{item.desc}</strong>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {detailInformation.appointmentList &&(
                        <div className="appointment-list">
                            {detailInformation.appointmentList.map((item) => (
                                <div key={item.id} className="item">
                                    <div className="sub">
                                        <strong>{item.title} :</strong>
                                    </div>
                                    <div className="desc">
                                        {item.desc &&(
                                            <strong>{item.desc}</strong>
                                        )}
                                        {item.date &&(
                                            <strong className="date">{item.date}</strong>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="graphic">
                    <Image
                        loader={imageLoader}
                        src="/img/background/bg-information.png"
                        alt="graphic"
                        width={330}
                        height={275}
                    />
                </div>
            </div>
        </div>
    )
}