"use client";

import React from 'react';

import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// icon
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// scss
import "@/assets/scss/components/_breadcrumb.scss";

export default function SearchFilter() {
    const [sort2, setSort2] = React.useState('10');
    const [sort3, setSort3] = React.useState('10');
    
    const handleChange2 = (event: SelectChangeEvent) => {
        setSort2(event.target.value as string);
    };
    const handleChange3 = (event: SelectChangeEvent) => {
        setSort3(event.target.value as string);
    };
    return (
        <div className="sc-search-head">
            <div className="text">
                <Typography variant="h2" className="title">
                    คำค้นหา <strong>“เจ้าหน้าที่”</strong>
                </Typography>
                <p className="desc">
                    <span className="icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 2V10L13 7L16 10V2M4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5ZM4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="#1052B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    มีทั้งหมด 1,382 หน้า ผลการค้นหาพบจำนวน 13,817 คดี
                </p>
            </div>
            <div className="filter-search">
                <div className="sort -noicon">
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label2"
                            id="demo-simple-select2"
                            value={sort2}
                            onChange={handleChange2}
                            IconComponent = {ArrowDownwardIcon}
                        >
                            <MenuItem value={10}>กลุ่ม : ข่าวสาร</MenuItem>
                            <MenuItem value={20}>กลุ่ม : xxx</MenuItem>
                            <MenuItem value={30}>กลุ่ม : yyy</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="sort">
                    <FormControl fullWidth>
                        <span className="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 4.6C2 4.03995 2 3.75992 2.10899 3.54601C2.20487 3.35785 2.35785 3.20487 2.54601 3.10899C2.75992 3 3.03995 3 3.6 3H20.4C20.9601 3 21.2401 3 21.454 3.10899C21.6422 3.20487 21.7951 3.35785 21.891 3.54601C22 3.75992 22 4.03995 22 4.6V5.26939C22 5.53819 22 5.67259 21.9672 5.79756C21.938 5.90831 21.8901 6.01323 21.8255 6.10776C21.7526 6.21443 21.651 6.30245 21.4479 6.4785L15.0521 12.0215C14.849 12.1975 14.7474 12.2856 14.6745 12.3922C14.6099 12.4868 14.562 12.5917 14.5328 12.7024C14.5 12.8274 14.5 12.9618 14.5 13.2306V18.4584C14.5 18.6539 14.5 18.7517 14.4685 18.8363C14.4406 18.911 14.3953 18.9779 14.3363 19.0315C14.2695 19.0922 14.1787 19.1285 13.9971 19.2012L10.5971 20.5612C10.2296 20.7082 10.0458 20.7817 9.89827 20.751C9.76927 20.7242 9.65605 20.6476 9.58325 20.5377C9.5 20.4122 9.5 20.2142 9.5 19.8184V13.2306C9.5 12.9618 9.5 12.8274 9.46715 12.7024C9.43805 12.5917 9.39014 12.4868 9.32551 12.3922C9.25258 12.2856 9.15102 12.1975 8.94789 12.0215L2.55211 6.4785C2.34898 6.30245 2.24742 6.21443 2.17449 6.10776C2.10986 6.01323 2.06195 5.90831 2.03285 5.79756C2 5.67259 2 5.53819 2 5.26939V4.6Z" stroke="#B18F30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        <Select
                            labelId="demo-simple-select-label3"
                            id="demo-simple-select3"
                            value={sort3}
                            onChange={handleChange3}
                            IconComponent = {ArrowDownwardIcon}
                        >
                            <MenuItem value={10}>จัดเรียงตาม: ล่าสุด</MenuItem>
                            <MenuItem value={20}>จัดเรียงตาม: เก่าสุด</MenuItem>
                            <MenuItem value={30}>จัดเรียงตาม: ใหม่สุด</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </div>
    )
}