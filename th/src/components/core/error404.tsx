"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

// scss
// scss
import "@/assets/scss/components/_button.scss";
import "@/assets/scss/modules/_404.scss";

// libs
import {imageLoader} from "@/libs/imageLoader";

export default function Error404() {
    return (
        <>
            <Box component="main" className="sc-error">
                <Container className="container">
                    <div className="triangle">
                        <svg width="1019" height="1000" viewBox="0 0 1019 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M955.555 682.429C1039.11 732.024 1039.11 852.976 955.555 902.571L-215.917 1597.9C-301.241 1648.54 -409.25 1587.05 -409.25 1487.83L-409.25 97.1717C-409.25 -2.05033 -301.241 -63.5434 -215.917 -12.8993L955.555 682.429Z" fill="white"/>
                        </svg>
                    </div>
                    <Box className="cover">
                        <Image className="img"
                            loader={imageLoader}
                            src="/img/static/under-construction.png"
                            alt="under construction"
                            width={654}
                            height={473}
                            priority
                        />
                    </Box>
                    <Box className="content">
                        <Image className="logo-img"
                            loader={imageLoader}
                            src='/img/static/logo.svg'
                            alt='ศาลปกครอง logo'
                            width={113}
                            height={147}
                            priority
                        />
                        <Typography variant="h1" className="title">
                            <strong>ไม่พบหน้านี้</strong>
                        </Typography>
                        <Typography variant="h2" className="h4 desc">
                            <strong>
                                ขออภัย! หน้าที่คุณกำลังค้นหาอาจถูกลบ <br />
                                เปลี่ยนชื่อ หรือไม่มีอยู่จริง
                            </strong>
                        </Typography>
                        <Box className="action">
                            <Button
                                component={Link}
                                href="/home"
                                variant="contained"
                                color="secondary"
                            >
                                กลับหน้าหลัก
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
