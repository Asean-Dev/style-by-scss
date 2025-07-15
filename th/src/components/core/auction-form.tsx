'use client';

import React from 'react';

import Box from '@mui/material/Box';
import Link from 'next/link';

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

function auctionForm() {
    const [sort, setSort] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setSort(event.target.value as string);
    };
    return (
        <Box component="form" className="form-default" noValidate autoComplete="off">
            <fieldset className="form-fieldset">
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
                    <div className="col slash">
                        <TextField fullWidth label="คดีหมายเลขดำที่/คำร้องที่" id="caseNumber" />
                        <div className="i-slash">/</div>
                        <TextField fullWidth id="petitionNumber" />
                    </div>
                </div>
                <div className="form-group">
                     <div className="col slash">
                        <TextField fullWidth label="ชื่อผู้ฟ้องคดี" id="plaintiff" />
                    </div>
                    <div className="col slash">
                        <TextField fullWidth label="ชื่อผู้ถูกฟ้องคดี" id="defendant" />
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
export default auctionForm