'use client';

import React from 'react';

import Box from '@mui/material/Box';
import Link from 'next/link';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Import custom styles
import "@/assets/scss/components/_form.scss";

function searchStatementsForm() {
    const [sort, setSort] = React.useState('');
    const [sort2, setSort2] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setSort(event.target.value as string);
    };
    const handleChange2 = (event: SelectChangeEvent) => {
        setSort2(event.target.value as string);
    };
    return (
        <Box component="form" className="form-default" noValidate autoComplete="off">
            <fieldset className="form-fieldset">
                <legend className="form-legend">
                    <span className="icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.25 30.25L23.3783 23.3783M27.0833 14.4167C27.0833 21.4123 21.4123 27.0833 14.4167 27.0833C7.42106 27.0833 1.75 21.4123 1.75 14.4167C1.75 7.42106 7.42106 1.75 14.4167 1.75C21.4123 1.75 27.0833 7.42106 27.0833 14.4167Z" stroke="#1052B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    สืบค้นคำพิพากษา/คำสั่ง/คำแถลงการณ์ศาลปกครองสูงสุด และศาลปกครองชั้นต้นที่ถึงที่สุด
                </legend>
                <div className="form-group">
                    <div className="col">
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="admc">ศาลปกครอง</InputLabel>
                            <Select
                                labelId="admc"
                                id="admc"
                                value={sort}
                                onChange={handleChange}
                                IconComponent = {KeyboardArrowDownIcon}
                            >
                                <MenuItem value={10}>1</MenuItem>
                                <MenuItem value={20}>2</MenuItem>
                                <MenuItem value={30}>3</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col">
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="litigationDepartment">แผนกคดี</InputLabel>
                            <Select
                                labelId="litigationDepartment"
                                id="litigationDepartment"
                                value={sort2}
                                onChange={handleChange2}
                                IconComponent = {KeyboardArrowDownIcon}
                            >
                                <MenuItem value={10}>1</MenuItem>
                                <MenuItem value={20}>2</MenuItem>
                                <MenuItem value={30}>3</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col">
                        <TextField fullWidth label="ทุกคำดังต่อไปนี้" id="word" />
                    </div>
                    <div className="col">
                        <TextField fullWidth label="วลีดังต่อไปนี้" id="phrase" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col">
                        <TextField fullWidth label="อย่างน้อยหนึ่งคำดังต่อไปนี้" id="oneword" />
                    </div>
                    <div className="col">
                        <TextField fullWidth label="นามสกุล*" id="surename" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col slash">
                        <TextField fullWidth label="คดีหมายเลขดำที่/คำร้องที่" id="caseBlackNumber" />
                        <div className="i-slash">/</div>
                        <TextField fullWidth id="petitionBlackNumber" />
                    </div>
                    <div className="col slash">
                        <TextField fullWidth label="คดีหมายเลขแดงที่/คำสั่งที่" id="caseRedNumber" />
                        <div className="i-slash">/</div>
                        <TextField fullWidth id="petitionRedNumber" />
                    </div>
                    <div className="col">
                        <div className="form-box">
                            <span className="label">เงื่อนไขอื่นๆ*</span>
                            <FormGroup className="box">
                                <FormControlLabel control={<Checkbox />} label="แสดงเฉพาะคดีที่น่าสนใจ" />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="col">
                        <TextField fullWidth label="นามสกุล*" id="surename2" />
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
export default searchStatementsForm