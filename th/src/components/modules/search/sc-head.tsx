"use client";

import React from 'react';
import Link from "next/link";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// icon
import EastIcon from '@mui/icons-material/East';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search'; 

// scss
import "@/assets/scss/components/_breadcrumb.scss";

export default function SearchSCHead() {
    const [sort, setSort] = React.useState('10');
    
    const handleChange = (event: SelectChangeEvent) => {
        setSort(event.target.value as string);
    };
    return (
        <Box className="sc-head">
            <Container className="container">
                <div className="breadcrumbs">
                    <ul className="item-list">
                        <li className="home">
                            <Link href="/home" className="link" title="หน้าหลัก">
                                <span className="icon">
                                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g >
                                            <path d="M2.91659 9.13818H7.08325M4.99992 1.63818V9.13818M1.24992 3.30485H2.08325C2.91659 3.30485 4.16659 2.88818 4.99992 2.47152C5.83325 2.88818 7.08325 3.30485 7.91659 3.30485H8.74992M6.66659 7.05485L7.91659 3.72152L9.16659 7.05485C8.80409 7.32568 8.36659 7.47152 7.91659 7.47152C7.46659 7.47152 7.02909 7.32568 6.66659 7.05485ZM0.833252 7.05485L2.08325 3.72152L3.33325 7.05485C2.97075 7.32568 2.53325 7.47152 2.08325 7.47152C1.63325 7.47152 1.19575 7.32568 0.833252 7.05485Z" stroke="#1052B5" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                    <defs>
                                        <clipPath >
                                            <rect width="10" height="10" fill="white" transform="translate(0 0.388184)"/>
                                        </clipPath>
                                    </defs>
                                    </svg>
                                </span>
                                <strong className="txt">หน้าหลัก</strong>
                            </Link>
                        </li>
                        <li className="active">
                            <Link href="/search" className="link" title="ค้นหา">
                                <span className="icon">
                                    <EastIcon/>
                                </span>
                                <strong className="txt">ค้นหา</strong>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Typography variant="h1" className="title">
                    ค้นหา
                </Typography>
                <div className="filter">
                    <div className="sort">
                        <FormControl fullWidth>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={sort}
                                onChange={handleChange}
                                IconComponent = {KeyboardArrowDownIcon}
                            >
                                <MenuItem value={10}>ค้นหาทั้งหมด</MenuItem>
                                <MenuItem value={20}>ค้นหา...</MenuItem>
                                <MenuItem value={30}>ค้นหา...</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="search">
                        <div className="box">
                            <div className="icon">
                                <span className="feather icon-search"></span>
                            </div>
                            <TextField
                                variant="outlined"
                                size="small"
                                placeholder="ค้นหา..."
                                className="search-input"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                href="/search"
                                                className="link btn-search"
                                                title="ค้นหา"
                                                aria-label="ค้นหา"
                                            >
                                                <SearchIcon />
                                                ค้นหา
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                autoFocus
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </Box>
    )
}