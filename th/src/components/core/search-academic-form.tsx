'use client';

import React from 'react';

import Box from '@mui/material/Box';
import Link from 'next/link';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


// Import custom styles
import "@/assets/scss/components/_form.scss";

function SearchAcademicForm() {
    return (
        <Box component="form" className="form-default" noValidate autoComplete="off">
            <fieldset className="form-fieldset">
                <legend className="form-legend">
                    <span className="icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.25 30.25L23.3783 23.3783M27.0833 14.4167C27.0833 21.4123 21.4123 27.0833 14.4167 27.0833C7.42106 27.0833 1.75 21.4123 1.75 14.4167C1.75 7.42106 7.42106 1.75 14.4167 1.75C21.4123 1.75 27.0833 7.42106 27.0833 14.4167Z" stroke="#1052B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    สืบค้นข้อมูลวิชาการ
                </legend>
                <div className="form-group">
                    <div className="col">
                        <TextField fullWidth label="ทุกคำดังต่อไปนี้" id="allWord" />
                    </div>
                    <div className="col">
                        <TextField fullWidth label="วลีดังต่อไปนี้" id="phrase" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col">
                        <TextField fullWidth label="อย่างน้อยหนึ่งคำดังต่อไปนี้" id="oneWord" />
                    </div>
                    <div className="col">
                        <TextField fullWidth label="นามสกุล*" id="sureName" />
                    </div>
                </div>
                
                <Box className="form-action">
                    <Button component={Link} href="/" variant="outlined"
                        color="secondary" size="medium"
                    >
                        ล้างค่า
                    </Button>
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
export default SearchAcademicForm