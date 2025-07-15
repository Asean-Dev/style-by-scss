"use client"

import React,{ useState, useEffect } from 'react';
import Link from "next/link";
import AOS from "aos";

import { PropsType } from '@/types/component-props';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import OtherLink from "@/components/ui/other-link";
import ScrollTop from "@/components/ui/toTop";

import "@/assets/scss/layouts/_footer.scss";

interface SiteLink {
    id: number;
    linkUrl: string;
    title: string;
}
interface SiteMapSection {
    id: number;
    head: string;
    links: SiteLink[];
}
const siteMapSections: SiteMapSection[] = [
    {
        id: 1,
        head: 'ศาลปกครอง',
        links: [
            { id: 1, linkUrl: '#', title: 'พระราชดำรัส' },
            { id: 2, linkUrl: '#', title: 'ประวัติความเป็นมา' },
            { id: 3, linkUrl: '#', title: 'ตราสัญลักษณ์' },
            { id: 4, linkUrl: '#', title: 'วิสัยทัศน์และพันธกิจ' },
            { id: 5, linkUrl: '#', title: 'เขตอำนาจของศาลปกครอง' },
            { id: 6, linkUrl: '#', title: 'โครงสร้างศาลปกครอง' },
        ],
    },
    {
        id: 2,
        head: 'สืบค้นข้อมูล',
        links: [
            { id: 1, linkUrl: '/search-information/statements', title: 'สืบค้นคำพิพากษา/คำสั่ง/คำแถลงการณ์ฯ' },
            { id: 2, linkUrl: '/search-information/case-type', title: 'คำพิพากษาคำสั่งศาลปกครองสูงสุด จำแนกตามประเภทคดี' },
            { id: 4, linkUrl: '/search-information/appointment', title: 'บัญชีนัดศาลปกครอง' },
            { id: 5, linkUrl: '/search-information/academic', title: 'ข้อมูลวิชาการ' },
        ],
    },
    {
        id: 3,
        head: 'สำนักงานศาลปกครอง',
        links: [
            { id: 1, linkUrl: '#', title: 'โครงสร้างและภารกิจ' },
            { id: 2, linkUrl: '#', title: 'ผู้บริหารสำนักงาน' },
            { id: 3, linkUrl: '/office/culture', title: 'วัฒนธรรมศาลปกกครอง(TRUST)' },
            { id: 4, linkUrl: '#', title: 'ITA สำนักงานศาลปกครอง' },
        ],
    },
    {
        id: 4,
        head: 'ประชาสัมพันธ์',
        links: [
            { id: 1, linkUrl: '/public-relations/news', title: 'ข่าวประชาสัมพันธ์' },
            { id: 2, linkUrl: '/public-relations/career', title: 'ข่าวสมัครงาน' },
            { id: 3, linkUrl: '/public-relations/procurement', title: 'ข่าวจัดซื้อจัดจ้าง' },
            { id: 4, linkUrl: '/public-relations/case', title: 'คดีเด่น/มติ ก.ศป.' },
            { id: 5, linkUrl: '/service', title: 'ศูนย์บริการประชาชน' },
            { id: 6, linkUrl: '/public-relations/account', title: 'บัญชีฯ การบรรจุบุคคลเข้ารับราชการ' },
            { id: 7, linkUrl: '/public-relations/flashback', title: 'ย้อนข่าว...เล่าคดีปกครอง' },
        ],
    },
    {
        id: 5,
        head: 'วิชาการ',
        links: [
            { id: 1, linkUrl: '/academic/articles', title: 'บทความวิชาการ' },
            { id: 2, linkUrl: '/academic/knowledge', title: 'นานาความรู้เรื่องกฎหมาย' },
            { id: 3, linkUrl: '/academic/example', title: 'อุทาหรณ์จากคดีปกครอง' },
            { id: 4, linkUrl: '/academic/verdict', title: 'สรุปคำแปลวินิจฉัยของศาลปกครอง' },
            { id: 5, linkUrl: '/academic/journal', title: 'วารสาร/หนังสือวิชาการ' },
        ],
    },
    {
        id: 6,
        head: 'ติดต่อเรา',
        links: [
            { id: 1, linkUrl: 'tel:1355', title: 'CALL CENTER ศาลปกครอง 1355' },
            { id: 2, linkUrl: '/search', title: 'สืบค้นข้อมูล' },
            { id: 3, linkUrl: '#', title: 'รวมลิงก์' },
            { id: 4, linkUrl: '#', title: 'รวมป้ายกำกับ' },
            { id: 5, linkUrl: '/staff-services', title: 'บริการเจ้าหน้าที่',},
            { id: 6, linkUrl: '/sitemap', title: 'แผนผังเว็บไซต์',},
        ],
    },
];

interface PdpaMap {
    id: number;
    linkUrl: string;
    title: string;
}
const PdpaMap: PdpaMap[] = [
    {
        id: 1,
        linkUrl: '#',
        title: 'นโยบายการรักษาความมั่นคงปลอดภัย',
    },
    {
        id: 2,
        linkUrl: '#',
        title: 'นโยบายเว็บไซต์',
    },
    {
        id: 3,
        linkUrl: '#',
        title: 'นโยบายการคุ้มครองข้อมูลส่วนบุคคล',
    },
];

export default function Footer(props: PropsType) {

    const [openSections, setOpenSections] = useState<Record<number, boolean>>({});

    const handleSectionToggle = (sectionId: number) => {
        setOpenSections(prevOpenSections => ({
            ...prevOpenSections,
            [sectionId]: !prevOpenSections[sectionId]
        }));
    };

    useEffect(() => {
        AOS.init({
            offset: 0,
            duration: 1000,
            once: true,
            delay: 100,
        });
    }, []);
    return (
        <>
            <Box component="footer" id="footer" className="layout-footer">
                <Box className="layout-footer-top">
                    <Container className="container">
                        <ScrollTop {...props} />
                        <Grid container className="grid align-items-center">
                            <Grid size={{ xs: 'grow' }}>
                                <Box className="layout-footer-contact" data-aos="fade-right">
                                    <Typography variant="subtitle1" className="title">
                                        ศาลปกครองและสำนักงานศาลปกครอง
                                    </Typography>
                                    <Typography variant="caption" className="desc">
                                        เลขที่ 120 หมู่ที่ 3 ถนนแจ้งวัฒนะ แขวงทุ่งสองห้อง เขตหลักสี่ กรุงเทพมหานคร 10210
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 'auto' }}>
                                <Box className="layout-footer-info">
                                    <ul className="nav-list">
                                        <li data-aos="fade-up">
                                            <Box className="wrapper">
                                                <span className="icon">
                                                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M29.7685 21.3594L25.5267 17.298C25.1898 16.9659 24.7695 16.7224 24.3061 16.5906C23.8426 16.4589 23.3516 16.4434 22.8801 16.5457C22.4086 16.6479 21.9725 16.8645 21.6136 17.1746C21.2546 17.4848 20.985 17.878 20.8305 18.3166C20.5895 18.9444 20.1191 19.4674 19.5062 19.7884C18.8934 20.1095 18.1797 20.207 17.4976 20.0628C15.6854 19.4375 14.0398 18.4367 12.6784 17.1319C11.3169 15.8271 10.2733 14.2505 9.62195 12.5148C9.43427 11.8601 9.51835 11.1612 9.85658 10.5645C10.1948 9.96778 10.761 9.51946 11.4366 9.31336C11.8947 9.16542 12.3054 8.90724 12.6293 8.56358C12.9531 8.21993 13.1793 7.80234 13.2861 7.35089C13.393 6.89944 13.3768 6.42929 13.2392 5.98554C13.1016 5.54179 12.8472 5.13935 12.5005 4.81683L8.25413 0.761225C7.69603 0.271301 6.96639 -0.000488281 6.20923 -0.000488281C5.45208 -0.000488281 4.72243 0.271301 4.16434 0.761225L1.28735 3.51735C-1.59115 6.41899 1.58979 14.1067 8.71007 20.9243C15.8303 27.7418 23.8595 30.9331 26.8899 28.0314L29.7685 25.2753C30.2801 24.7409 30.564 24.0423 30.564 23.3173C30.564 22.5924 30.2801 21.8938 29.7685 21.3594Z" fill="white"/>
                                                    </svg>
                                                </span>
                                                <Link href="tel:0-2141-1111" className="link" title="0-2141-1111">0-2141-1111</Link>
                                            </Box>
                                        </li>
                                        <li data-aos="fade-up">
                                            <Box className="wrapper">
                                                <span className="icon">
                                                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <mask maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="30">
                                                            <path d="M30.5943 0H0.198242V29.1037H30.5943V0Z" fill="white"/>
                                                        </mask>
                                                        <g mask="url(#mask0_2178_313)">
                                                            <path d="M16.2762 18.2288C16.0058 18.3862 15.6953 18.4694 15.3788 18.4694C15.0623 18.4694 14.7518 18.3862 14.4813 18.2288L0.198242 9.87891V20.9776C0.198645 22.1168 0.671453 23.2092 1.51274 24.0147C2.35403 24.8202 3.49494 25.2729 4.6847 25.2733H26.1139C27.3026 25.2714 28.442 24.818 29.2819 24.0127C30.1219 23.2073 30.5939 22.1158 30.5943 20.9776V9.87891L16.2762 18.2288Z" fill="white"/>
                                                            <path d="M26.1085 3.83154H4.68539C3.66898 3.83478 2.68422 4.17039 1.89427 4.78279C1.10432 5.39519 0.556576 6.24762 0.341797 7.19884L15.4137 15.9954L30.4506 7.19884C30.2359 6.24786 29.6884 5.39562 28.8987 4.78325C28.1091 4.17088 27.1247 3.83511 26.1085 3.83154Z" fill="white"/>
                                                        </g>
                                                    </svg>
                                                </span>
                                                <Link href="mailto:saraban@admincourt.go.th" className="link" title="saraban@admincourt.go.th">saraban@admincourt.go.th</Link>
                                            </Box>
                                        </li>
                                    </ul>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Box className="layout-footer-middle">
                    <Container className="container">
                        <Box component="nav" className="layout-footer-sitemap">
                            <ul className="item-list">
                                {siteMapSections.map((section) => (
                                    <li key={section.id} className={`${openSections[section.id] ? 'open' : ''}`}>
                                        <Box className="head-txt" data-aos="fade-down">
                                            <Typography variant="subtitle1" className="h4 txt">
                                                {section.head}
                                             </Typography>
                                            <Box className={`action ${openSections[section.id] ? 'open' : ''}`}>
                                                <IconButton
                                                    className="menu-mobile-btn"
                                                    aria-label={`Toggle ${section.head} section`}
                                                    onClick={() => handleSectionToggle(section.id)}
                                                >
                                                    {openSections[section.id] ?  <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                                </IconButton>
                                            </Box>
                                        </Box>
                                        <ul className="nav-list">
                                            {section.links.map((link) => (
                                                <li key={link.id} data-aos="fade-up">
                                                    <Link href={link.linkUrl} className="link" title={link.title}>
                                                        {link.title}
                                                     </Link>
                                                 </li>
                                             ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </Box>
                        <OtherLink/>
                    </Container>
                </Box>
                <Box className="layout-footer-bottom">
                    <Container className="container">
                        <Grid container className="grid">
                            <Grid size={{ xs: 12, lg: 'grow' }}>
                                <Box className="layout-footer-count" data-aos="fade-right">
                                    <div className="col">
                                        <Typography variant="caption" className="txt">
                                            จำนวนผู้เข้าชม
                                            <strong>655,343</strong>
                                        </Typography>
                                    </div>
                                    <div className="col">
                                        <Typography variant="caption" className="txt">
                                            มีผู้ออนไลน์อยู่
                                            <strong>20</strong>
                                        </Typography>
                                    </div>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, lg: 'auto' }}>
                                <div className="box">
                                    <div className="text-box" data-aos="fade-up">
                                        <Typography variant="body1" className="txt">
                                            สงวนลิขสิทธิ์ © 2568 ศาลปกครองเชียงใหม่
                                        </Typography>
                                    </div>
                                    <ul className="pdpa-nav nav-list" data-aos="fade-left">
                                        {PdpaMap.map((PdpaData) => (
                                            <li key={PdpaData.id}>
                                                <Link href={PdpaData.linkUrl} className="link" title={PdpaData.title}>
                                                    {PdpaData.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
