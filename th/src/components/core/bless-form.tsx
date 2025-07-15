'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Box from '@mui/material/Box';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Import custom styles
import "@/assets/scss/components/_button.scss";
import "@/assets/scss/components/_form.scss";

// libs
import {imageLoader} from "@/libs/imageLoader";

function ContactForm() {
    const [sort, setSort] = React.useState('10');
    const handleChange = (event: SelectChangeEvent) => {
        setSort(event.target.value as string);
    };
    return (
        <Box component="form" className="form-default" noValidate autoComplete="off">
            <fieldset className="form-fieldset">
                <legend className="form-legend text-center">
                    ลงนามถวายพระพร
                </legend>
                <div className="form-group">
                    <div className="col">
                        <TextField fullWidth label="ชื่อ-นามสกุล*" id="name" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col">
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="word">คำกล่าวถวายพระพร*</InputLabel>
                            <Select
                                labelId="word"
                                id="word"
                                value={sort}
                                onChange={handleChange}
                                IconComponent = {KeyboardArrowDownIcon}
                            >
                                <MenuItem value={10}>พระชนมายุยิ่งยืนนาน ทรงพระเกษมสำราญ สถิตเป็นมิ่งขวัญแห่งปวงประชาสถาพรตราบกาลนาน</MenuItem>
                                <MenuItem value={20}>2</MenuItem>
                                <MenuItem value={30}>3</MenuItem>
                            </Select>
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
                        ส่งแบบฟอร์ม
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