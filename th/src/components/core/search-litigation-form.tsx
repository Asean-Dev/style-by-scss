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
import Select, { SelectChangeEvent } from '@mui/material/Select';

// icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Import custom styles
import "@/assets/scss/components/_form.scss";

function SearchLitigationForm() {
    const [sort, setSort] = React.useState('');
    const [sort2, setSort2] = React.useState('');
    const [sort3, setSort3] = React.useState('');
    const [sort4, setSort4] = React.useState('');
    const [sort5, setSort5] = React.useState('');
    const [sort6, setSort6] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setSort(event.target.value as string);
    };
    const handleChange2 = (event: SelectChangeEvent) => {
        setSort2(event.target.value as string);
    };
    const handleChange3 = (event: SelectChangeEvent) => {
        setSort3(event.target.value as string);
    };
    const handleChange4 = (event: SelectChangeEvent) => {
        setSort4(event.target.value as string);
    };
    const handleChange5 = (event: SelectChangeEvent) => {
        setSort5(event.target.value as string);
    };
    const handleChange6 = (event: SelectChangeEvent) => {
        setSort6(event.target.value as string);
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
                    สืบค้นบัญชีการฟ้องคดี
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
                    <div className="col-3">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label="วันที่รับคำฟ้อง" />
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
                    <div className="col slash">
                        <TextField fullWidth label="คดีหมายเลขดำที่/คำร้องที่" id="caseBlackNumber" />
                        <div className="i-slash">/</div>
                        <TextField fullWidth id="petitionBlackNumber" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col">
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="NameOfPlaintiff">ชื่อผู้ฟ้องคดี</InputLabel>
                            <Select
                                labelId="NameOfPlaintiff"
                                id="NameOfPlaintiff"
                                value={sort3}
                                onChange={handleChange3}
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
                            <InputLabel variant="standard" htmlFor="NameOfDefendant">ชื่อผู้ถูกฟ้องคดี</InputLabel>
                            <Select
                                labelId="NameOfDefendant"
                                id="NameOfDefendant"
                                value={sort4}
                                onChange={handleChange4}
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
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="CaseOfDispute">เรื่องตามกรณีข้อพิพาท</InputLabel>
                            <Select
                                labelId="CaseOfDispute"
                                id="CaseOfDispute"
                                value={sort5}
                                onChange={handleChange5}
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
                            <InputLabel variant="standard" htmlFor="searchOther">คำค้นอื่น ๆ</InputLabel>
                            <Select
                                labelId="searchOther"
                                id="searchOther"
                                value={sort6}
                                onChange={handleChange6}
                                IconComponent = {KeyboardArrowDownIcon}
                            >
                                <MenuItem value={10}>1</MenuItem>
                                <MenuItem value={20}>2</MenuItem>
                                <MenuItem value={30}>3</MenuItem>
                            </Select>
                        </FormControl>
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
export default SearchLitigationForm