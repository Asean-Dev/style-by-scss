'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Box from '@mui/material/Box';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';


// Import custom styles
import "@/assets/scss/components/_button.scss";
import "@/assets/scss/components/_form.scss";

// libs
import {imageLoader} from "@/libs/imageLoader";

function ContactForm() {
    return (
        <Box component="form" className="form-default" noValidate autoComplete="off">
            <fieldset className="form-fieldset">
                <legend className="form-legend text-center">
                    แบบฟอร์มติดต่อสอบถาม
                </legend>
                <div className="form-group">
                    <div className="col">
                        <TextField fullWidth label="ชื่อ-นามสกุล*" id="name" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col">
                        <TextField fullWidth label="อีเมล*" id="mail" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col">
                        <TextField fullWidth label="เรื่องที่ต้องการแจ้ง*" id="subject" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col">
                        <TextField fullWidth label="เบอร์โทรศัพท์*" id="phone" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col">
                        <TextField fullWidth label="หัวข้อ*" id="topic" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col">
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="info">รายละเอียด*</InputLabel>
                            <TextareaAutosize id="info" minRows={3}/>
                        </FormControl>
                    </div>
                </div>
                <div className="form-captcha">
                    <strong className="txt">ระบบตรวจสอบยืนยัน</strong>
                    <div className="captcha">
                        <Image className="cover-img"
                            loader={imageLoader}
                            src="/img/static/reCAPTCHA.png" 
                            alt="captcha"
                            width={302}
                            height={76}
                        />
                    </div>
                    <span className="note">โปรดทำเครื่องหมายในช่องตรวจสอบยืนยัน</span>
                </div>
                
                <Box className="form-action">
                    <Button component={Link} href="/" variant="contained"
                        color="secondary" size="medium"
                    >
                        ค้นหา
                        <span className="icon" aria-hidden="true">
                            <span className="feather icon-arrow-right"></span>
                        </span>
                    </Button>
                </Box>
            </fieldset>
        </Box>
    );
}
export default ContactForm