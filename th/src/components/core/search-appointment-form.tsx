'use client';

import React from 'react';

import Box from '@mui/material/Box';
import Link from 'next/link';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Import custom styles
import "@/assets/scss/components/_form.scss";

function SearchAppointmentForm() {
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
                    สืบค้นบัญชีนัดศาลปกครอง
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
                    <div className="col-6">
                        <div className="form-box">
                            <FormControl>
                                <FormLabel id="appointment-type">ประเภทการนัด</FormLabel>
                                <RadioGroup row aria-labelledby="appointment-type" name="appointment-type">
                                    <FormControlLabel value="นั่งพิจารณาคดี" control={<Radio />} label="นั่งพิจารณาคดี" />
                                    <FormControlLabel value="นั่งไต่สวน" control={<Radio />} label="นั่งไต่สวน" />
                                    <FormControlLabel value="อ่านคำพิพากษา/คำสั่ง" control={<Radio />} label="อ่านคำพิพากษา/คำสั่ง" />
                                    <FormControlLabel value="อ่านคำพิพากษา/คำสั่งศาลปกครองสูงสุด" control={<Radio />} label="อ่านคำพิพากษา/คำสั่งศาลปกครองสูงสุด" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div className="col-3">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label="วันที่นัด" />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div className="col-3">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label="ถึงวันที่" />
                            </DemoContainer>
                        </LocalizationProvider>
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
                    <div className="col-6">
                        <TextField fullWidth label="ชื่อผู้ฟ้องคดี" id="namePlaintiff" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col">
                        <TextField fullWidth label="ชื่อผู้ถูกฟ้องคดี" id="nameDefendant" />
                    </div>
                    <div className="col">
                        <TextField fullWidth label="ชื่อผู้ถูกฟ้องคดี*" id="nameDefendant2" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col">
                        <TextField fullWidth label="คำค้นอื่น ๆ" id="searchOther" />
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
export default SearchAppointmentForm