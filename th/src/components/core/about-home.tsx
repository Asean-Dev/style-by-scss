'use client';

import React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

// Import custom styles
import "@/assets/scss/modules/_about-home.scss";

// libs
import {imageLoader} from "@/libs/imageLoader";

function scAbout() {
    return (
        <Box component="section" id="about" className="section sc-about">
            <Box className="sc-inner">
                <Container className="container">
                    <Box className="sc-body">
                        <Box className="thumb" data-aos="fade-right">
                            <Box component="figure" className="ratio">
                                <Image
                                    loader={imageLoader}
                                    src="/img/upload/about3.jpg" 
                                    alt="about" 
                                    width={1080}
                                    height={600}
                                />
                            </Box>
                        </Box>
                        <Box className="content" data-aos="fade-left">
                            <Typography variant="h2" className="h3 title">
                                ประวัติของ <br />
                                ศาลปกครองเชียงใหม่
                            </Typography>
                            <Typography variant="body1" className="desc">
                                ศาลปกครองเชียงใหม่เปิดทำการเมื่อวันที่ ๓๐ กรกฎาคม ๒๕๔๔ นับเป็นศาลปกครองในภูมิภาค
                                ที่เปิดทำการเป็นแห่งแรก มีเขตอำนาจตลอดภาคเหนือตอนบน รวม ๘ จังหวัด ได้แก่จังหวัดเชียงราย
                                จังหวัดเชียงใหม่จังหวัดแม่ฮ่องสอน จังหวัดลำปาง จังหวัดลำพูน จังหวัดพะเยา จังหวัดน่าน
                                และจังหวัดแพร่
                            </Typography>
                            <Box className="action">
                                <Button
                                    component={Link}
                                    href="/"
                                    variant="outlined"
                                    color="primary"
                                    size="large"
                                >
                                    ดูทั้งหมด
                                    <span className="icon" aria-hidden="true">
                                        <span className="feather icon-arrow-right"></span>
                                    </span>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
export default scAbout