"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// icon
import CallIcon from '@mui/icons-material/Call';

// components
import SocialNav from "@/components/ui/social";

// libs
import {imageLoader} from "@/libs/imageLoader";

export default function ContactHead() {
    return (
        <Box className="sc-head">
            <div className="brand">
                <div className="logo">
                    <Image className="cover-img"
                        loader={imageLoader}
                        src="/img/static/logo.svg" 
                        alt="ADMC logo"
                        width={153}
                        height={200}
                        priority
                    />
                </div>
                <Typography variant="h1" className="title">
                    ศาลปกครอง
                </Typography>
                <Typography variant="h2" className="h3 desc">
                    The Administrative Court
                </Typography>
                <div className="action">
                    <Link href="#" className="link" title="ดูแผนที่">
                        <span className="icon">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.0013 15.0003L2.16797 18.3337V5.00033L8.0013 1.66699M8.0013 15.0003L13.8346 18.3337M8.0013 15.0003V1.66699M13.8346 18.3337L18.8346 15.0003V1.66699L13.8346 5.00033M13.8346 18.3337V5.00033M13.8346 5.00033L8.0013 1.66699" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        ดูแผนที่
                    </Link>
                </div>
            </div>
            <div className="content">
                <Typography variant="h3" className="title">
                    ศาลปกครองสูงสุด ศาลปกครองกลาง 
                    <br />
                    และสำนักงานศาลปกครอง
                </Typography>
                <Typography variant="h4" className="desc">
                    เลขที่ 120 หมู่ที่ 3 ถนนแจ้งวัฒนะ แขวงทุ่งสองห้อง เขตหลักสี่ กรุงเทพฯ 10210
                    <br />
                    โทรศัพท์ : Call Center ศาลปกครอง 1355 หรือ 021-411-111
                </Typography>
                <div className="info">
                    <div className="call-center">
                        <Link href="tel:1355" className="link" title="Call Center - 1355">
                            Call Center
                            <span className="icon">
                                <CallIcon/>
                            </span>
                            <strong>1355</strong>
                        </Link>
                    </div>
                    <div className="social">
                        <SocialNav />
                    </div>
                </div>
            </div>
        </Box>
    )
}