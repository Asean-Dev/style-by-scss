"use client"

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from "next/link";
import Image from 'next/image';

import { usePathname } from 'next/navigation';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search'; 
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import EastIcon from '@mui/icons-material/East';

import "@/assets/scss/components/_dropdown.scss";
import "@/assets/scss/layouts/_header.scss";

// libs
import {imageLoader} from "@/libs/imageLoader";

interface BrandData {
    id: number;
    imageUrl: string;
    imageAlt: string;
    title: string;
    desc: string;
    linkUrl: string;
}
const brandData: BrandData[] = [
    {
        id: 1,
        imageUrl: '/img/static/logo.svg',
        imageAlt: 'ศาลปกครอง logo',
        title: 'ศาลปกครอง',
        desc: 'The Administrative Court',
        linkUrl: '/home',
    },
];

interface NavDropdownItems {
    id: number;
    title: string;
    linkUrl: string;
    pathSegment?: string;
}
interface NavItem {
    id: number;
    title: string;
    linkUrl: string;
    pathSegment?: string;
    dropdown?: string;
    dropdownItems?: NavDropdownItems[];
    imageLink?: string;
    imageUrl?: string;
    imageAlt?: string;
}
const navItems: NavItem[] = [
    { id: 1, title: 'หน้าหลัก', linkUrl: '/home', pathSegment: 'home'},
    { id: 2, title: 'ศาลปกครอง', linkUrl: '/admincourt', pathSegment: 'admincourt', 
        dropdown: 'dropdown',
        dropdownItems: [
            { id: 1, title: 'พระราชดำรัส', linkUrl: '/admincourt/list', pathSegment: '/admincourt/list',},
            { id: 2, title: 'ประวัติความเป็นมา', linkUrl: '#', pathSegment: '',},
            { id: 3, title: 'ตราสัญลักษณ์', linkUrl: '#', pathSegment: '',},
            { id: 4, title: 'วิสัยทัศน์และพันธกิจ', linkUrl: '#', pathSegment: '',},
            { id: 5, title: 'แผนแม่บทศาลปกครอง', linkUrl: '#', pathSegment: '',},
            { id: 6, title: 'เขตอำนาจของศาลปกครอง', linkUrl: '#', pathSegment: '',},
            { id: 7, title: 'ผู้บริหารศาลปกครอง', linkUrl: '#', pathSegment: '',},
            { id: 8, title: 'นโยบายประธานศาลปกครองสูงสุด', linkUrl: '#', pathSegment: '',},
            { id: 9, title: 'ศาลปกครองในภูมิภาค', linkUrl: '/admincourt/regions/grid', pathSegment: '/admincourt/regions/',},
            { id: 10, title: 'ข้อควรรู้เกี่ยวกับการฟ้องคดีปกครอง', linkUrl: '/admincourt/things-to-know/', pathSegment: '/admincourt/things-to-know',},
            { id: 11, title: 'สถิติคดีปกครอง', linkUrl: '/admincourt/statistics', pathSegment: '/admincourt/statistics',},
        ],
        imageLink: '/admincourt',
        imageUrl: '/img/upload/submenu.jpg',
        imageAlt: 'ศาลปกครอง',
    },
    { id: 3, title: 'สำนักงานศาลปกครอง', linkUrl: '/office', pathSegment: 'office', 
        dropdown: 'dropdown',
        dropdownItems: [
            { id: 1, title: 'โครงสร้างและภารกิจ', linkUrl: '#', pathSegment: '',},
            { id: 2, title: 'ผู้บริหารสำนักงาน', linkUrl: '#', pathSegment: ''},
            { id: 3, title: 'วัฒนธรรมศาลปกครอง(TRUST)', linkUrl: '/office/culture', pathSegment: '/office/culture'},
            { id: 4, title: 'ITA ศาลปกครอง', linkUrl: '#', pathSegment: ''},
            { id: 5, title: 'ผลการสำรวจความเชื่อมั่น', linkUrl: '/office/confidence', pathSegment: '/office/confidence'},
            { id: 6, title: 'รายงานประจำปี', linkUrl: '/office/annual-report', pathSegment: '/office/annual-report'},
            { id: 7, title: 'รายงานผู้สอบบัญชี / การเงิน', linkUrl: '/office/auditors', pathSegment: '/office/auditors'},
            { id: 8, title: 'รายงานผลคณะกรรมการตรวจสอบ', linkUrl: '/office/performance', pathSegment: '/office/performance'},
            { id: 9, title: 'ห้องสมุด พิพิธภัณฑ์ และจดหมายเหตุศาลปกครอง', linkUrl: '/office/library', pathSegment: '/office/library'},
            { id: 10, title: 'การใช้จ่ายเงินหรือทรัพย์สินของหน่วยงานของรัฐให้สื่อมวลชน', linkUrl: '/office/spending', pathSegment: '/office/spending'},
        ],
        imageLink: '/office',
        imageUrl: '/img/upload/submenu.jpg',
        imageAlt: 'สำนักงานศาลปกครอง',

    },
    { id: 4, title: 'วิชาการ', linkUrl: '/academic', pathSegment: 'academic', 
        dropdown: 'dropdown',
        dropdownItems: [
            { id: 1, title: 'บทความวิชาการ', linkUrl: '/academic/articles', pathSegment: '/academic/articles',},
            { id: 2, title: 'นานาความรู้เรื่องกฎหมายมหาชน', linkUrl: '/academic/knowledge', pathSegment: '/academic/knowledge',},
            { id: 3, title: 'อุทาหรณ์จากคดีปกครอง', linkUrl: '/academic/example', pathSegment: '/academic/example',},
            { id: 4, title: 'คำแปลคำพิพากษาต่างประเทศ', linkUrl: '/academic/foreign', pathSegment: '/academic/foreign',},
            { id: 5, title: 'คำแปลคำวินิจฉัยของไทย', linkUrl: '/academic/verdict', pathSegment: '/academic/verdict',},
            { id: 6, title: 'วารสารและหนังสือวิชาการ', linkUrl: '/academic/journal', pathSegment: '/academic/journal',},
        ],
        imageLink: '/academic',
        imageUrl: '/img/upload/submenu.jpg',
        imageAlt: 'วิชาการ',
    },
    { id: 5, title: 'สืบค้นข้อมูล', linkUrl: '/search-information', pathSegment: 'search-information', 
        dropdown: 'dropdown',
        dropdownItems: [
            { id: 1, title: 'คำพิพากษา / คำสั่ง / แถลงการณ์', linkUrl: '/search-information/statements', pathSegment: '/search-information/statements',},
            { id: 2, title: 'คำพิพากษาศาลปกครองสูงสุด (แยกตามประเภทคดี)', linkUrl: '/search-information/case-type', pathSegment: '/search-information/case-type',},
            { id: 3, title: 'บัญชีนัด', linkUrl: '/search-information/appointment', pathSegment: '/search-information/appointment',},
            { id: 4, title: 'บัญชีการฟ้องคดี', linkUrl: '/search-information/litigation', pathSegment: '/search-information/litigation',},
            { id: 5, title: 'ข้อมูลวิชาการ', linkUrl: '/search-information/academic', pathSegment: '/search-information/academic',},
        ],
        imageLink: '/search-information',
        imageUrl: '/img/upload/submenu.jpg',
        imageAlt: 'สืบค้นข้อมูล',
    },
    { id: 6, title: 'กฎหมาย / กฎ', linkUrl: '/law', pathSegment: 'law', 
        dropdown: 'dropdown',
        dropdownItems: [
            { id: 1, title: 'กฎหมายเกี่ยวกับศาลปกครอง', linkUrl: '/law/about', pathSegment: '/law/about',},
            { id: 2, title: 'กฎ ระเบียบ ข้อบังคับ', linkUrl: '/law/rules', pathSegment: '/law/rules',},
            { id: 3, title: 'คำแปลภาษาอังกฤษ', linkUrl: '/law/translation', pathSegment: '/law/translation',},
            { id: 4, title: 'คำอธิบายกฎหมายว่าด้วยวิธีพิจารณาคดีปกครอง', linkUrl: '/law/consideration', pathSegment: '/law/consideration',},
            { id: 5, title: 'ประกาศรายชื่อกฎหมายและหน่วยงานที่รับผิดชอบฯ', linkUrl: '/law/responsible', pathSegment: '/law/responsible',},
        ],
        imageLink: '/law',
        imageUrl: '/img/upload/submenu.jpg',
        imageAlt: 'กฎหมาย / กฎ',
    },
    { id: 7, title: 'ประชาสัมพันธ์', linkUrl: '/public-relations', pathSegment: 'public-relations', 
        dropdown: 'dropdown',
        dropdownItems: [
            { id: 1, title: 'ข่าวประชาสัมพันธ์', linkUrl: '/public-relations/news', pathSegment: '/public-relations/news',},
            { id: 2, title: 'ข่าวรับสมัครงาน', linkUrl: '/public-relations/career', pathSegment: '/public-relations/career',},
            { id: 3, title: 'ข่าวจัดซื้อจัดจ้าง', linkUrl: '/public-relations/procurement', pathSegment: '/public-relations/procurement',},
            { id: 4, title: 'ข่าวประกาศต่างๆ', linkUrl: '/public-relations/announcements', pathSegment: '/public-relations/announcements',},
            { id: 5, title: 'สื่อประชาสัมพันธ์', linkUrl: '/public-relations/media', pathSegment: '/public-relations/media',},
            { id: 6, title: 'คดีเด่น', linkUrl: '/public-relations/case', pathSegment: '/public-relations/case',},
            { id: 7, title: 'ย้อนข่าวเล่าคดีปกครอง', linkUrl: '/public-relations/flashback', pathSegment: '/public-relations/flashback',},
            { id: 8, title: 'ดรรชนีข้อมูลข่าวสาร', linkUrl: '/public-relations/information', pathSegment: '/public-relations/information',},
            { id: 9, title: 'บัญชีรายละเอียดการบรรจุบุคคล เข้ารับราชการสำนักงานศาลปกครอง', linkUrl: '/public-relations/account', pathSegment: '/public-relations/account',},
            { id: 10, title: 'คู่มือบริการ', linkUrl: '/public-relations/manual', pathSegment: '/public-relations/manual',},
        ],
        imageLink: '/public-relations',
        imageUrl: '/img/upload/submenu.jpg',
        imageAlt: 'ประชาสัมพันธ์',
    },
    { id: 8, title: 'บริการประชาชน', linkUrl: '/service', pathSegment: 'service', 
        dropdown: 'dropdown',
        dropdownItems: [
            { id: 1, title: 'ยื่นฟ้องคดีปกครองออนไลน์', linkUrl: '#', pathSegment: '',},
            { id: 2, title: 'กำหนดระยะเวลาดำเนินงานคดีปกครอง/ติดตาม', linkUrl: '#', pathSegment: '',},
            { id: 3, title: 'ร้องเรียนการปฏิบัติงานเจ้าหน้าที่ศาลปกครอง', linkUrl: '#', pathSegment: '',},
            { id: 4, title: 'แจ้งเบาะแสการทุจริต', linkUrl: '#', pathSegment: '',},
            { id: 5, title: 'ปรึกษาคดีปกครองออนไลน์', linkUrl: '#', pathSegment: '',},
            { id: 6, title: 'ดาวน์โหลดแบบฟอร์มศาลและตัวอย่างการเขียน', linkUrl: '/service/court-forms', pathSegment: '/service/court-forms',},
            { id: 7, title: 'ดาวน์โหลดแอปพลิเคชันศาลปกครอง', linkUrl: '#', pathSegment: '',},
            { id: 8, title: 'หอสมุดกฎหมายมหาชนออนไลน์', linkUrl: '#', pathSegment: '',},
            { id: 9, title: 'เยี่ยมชมพิพิธภัณฑ์เสมือน', linkUrl: '#', pathSegment: '',},
            { id: 10, title: 'ติดต่อศึกษาดูงานศาลปกครอง', linkUrl: '#', pathSegment: '',},
            { id: 11, title: 'ศูนย์บริการประชาชน', linkUrl: '#', pathSegment: '',},
            { id: 12, title: 'รวมเว็บไซต์ที่น่าสนใจ', linkUrl: '#', pathSegment: '',},
            { id: 13, title: 'ถาม-ตอบ / คำถามที่พบบ่อย', linkUrl: '#', pathSegment: '',},
            { id: 14, title: 'การเรียนรู้ผ่านระบบออนไลน์', linkUrl: '/service/online-learning', pathSegment: '/service/online-learning',},
            { id: 15, title: 'มุมความรู้สำหรับประชาชน', linkUrl: '/service/knowledge-corner', pathSegment: '/service/knowledge-corner',},
        ],
        imageLink: '/service',
        imageUrl: '/img/upload/submenu.jpg',
        imageAlt: 'บริการประชาชน',
    },
    { id: 9, title: 'ติดต่อหน่วยงาน', linkUrl: '/contact', pathSegment: 'contact' },
];
export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    const currentPath = usePathname();

    const closeAllDropdowns = useCallback((): void => {
        const BtnDropDown: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>('[data-toggle="dropdown"]');
        const allDropdownContainers: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>('.dropdown');
        const allDropdownMenus: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>('.dropdown-menu');

        BtnDropDown.forEach((btn: HTMLElement) => btn.classList.remove('active'));
        allDropdownContainers.forEach((drop: HTMLElement) => drop.classList.remove('open'));
        allDropdownMenus.forEach((menu: HTMLElement) => menu.classList.remove('show'));
        setIsLangOpen(false); // Ensure language dropdown state is also reset
    }, [setIsLangOpen]);

    const closeOverlayAndPopups = useCallback(() => {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
        closeAllDropdowns();
    }, [closeAllDropdowns, setIsMobileMenuOpen, setIsSearchOpen]);

    const handleSearchToggle = () => {
        const newSearchOpenState = !isSearchOpen;
        closeOverlayAndPopups(); // Close everything first
        setIsSearchOpen(newSearchOpenState); // Then set the new state for search
    };

    const handleMobileMenuToggle = () => {
        const newMobileMenuState = !isMobileMenuOpen;
        closeOverlayAndPopups(); // Close everything first
        setIsMobileMenuOpen(newMobileMenuState); // Then set the new state for mobile menu
    };

    const handleLangToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const currentlyOpen = isLangOpen;
        closeAllDropdowns(); // Close other dropdowns first

        if (!currentlyOpen) { // If it *was* closed, now open it
            setIsLangOpen(true);
        }
        // Ensure search is closed if it was open
        if (isSearchOpen) {
            setIsSearchOpen(false);
        }
    };

    const handleDropdownToggle = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();

        const toggleElement = e.currentTarget;
        const parentDropdown = toggleElement.parentElement;

        if (!parentDropdown || !parentDropdown.classList.contains('dropdown')) return;

        const associatedMenu = parentDropdown.querySelector<HTMLElement>('.dropdown-menu');
        if (!associatedMenu) return;

        const wasOpen = parentDropdown.classList.contains('open');
        closeAllDropdowns();

        if (isSearchOpen) {
            setIsSearchOpen(false);
        }

        if (!wasOpen) {
            toggleElement.classList.add('active');
            parentDropdown?.classList.add('open');
            associatedMenu.classList.add('show');
        }
    };

    useEffect(() => {
        const headerElement = headerRef.current;
        const headerHeight: number = headerElement ? headerElement.offsetHeight : 0;

        const handleScroll = () => {
            if (!headerElement) return;
            let scrollPos: number = window.scrollY || document.documentElement.scrollTop;
            if (scrollPos > headerHeight / 2) {
                headerElement.classList.add("tiny");
            } else {
                headerElement.classList.remove("tiny");
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        closeOverlayAndPopups();
    }, [currentPath, closeOverlayAndPopups]);

    const isNavItemActive = (item: NavItem): boolean => {
        if (item.pathSegment === `${item.linkUrl}`) {
            return currentPath === `${item.linkUrl}`;
        }
        return item.pathSegment ? currentPath.startsWith(`/${item.pathSegment}`) : false;
    };

    const isNavDropdownActive = (dropdownLink: NavDropdownItems): boolean => {
        if (dropdownLink.linkUrl && dropdownLink.linkUrl !== '#' && currentPath === dropdownLink.linkUrl) {
            return true;
        }

        if (dropdownLink.pathSegment && dropdownLink.pathSegment.length > 0) {
            const segmentToMatch = dropdownLink.pathSegment.startsWith('/')
                ? dropdownLink.pathSegment
                : `/${dropdownLink.pathSegment}`;
            if (currentPath.startsWith(segmentToMatch)) {
                return true;
            }
        }
        return false;
    };

    useEffect(() => {
        const handleDocumentClick = (event: MouseEvent): void => {
            const clickedElement = event.target as HTMLElement;

            // Check if the click is on any dropdown toggle or inside an open dropdown menu
            const isClickOnToggle = clickedElement.closest('[data-toggle="dropdown"]');
            const isClickInsideOpenMenu = clickedElement.closest('.dropdown-menu.show, .dropdown.open .dropdown-menu');
            // Consider the language toggle specifically if it doesn't use data-toggle="dropdown" in the same way
            // but it should for consistency with closeAllDropdowns.

            if (!isClickOnToggle && !isClickInsideOpenMenu) {
                closeAllDropdowns();
            }
        };

        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [closeAllDropdowns]);

    return (
        <>
            <Box className={`header-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={closeOverlayAndPopups} aria-hidden="true" />
            <Box component="header" id="header" className={`layout-header`} ref={headerRef}>
                <Container className="container">
                    <Grid container className="layout-header-top">
                        <Grid size="auto" data-aos="fade-right">
                            {brandData.map((brandInfo) => (
                                <Link href={brandInfo.linkUrl} className="layout-header-logo" title={brandInfo.title} key={brandInfo.id}>
                                    <Image className="logo-img"
                                        loader={imageLoader}
                                        src={brandInfo.imageUrl}
                                        alt={brandInfo.imageAlt}
                                        width={70}
                                        height={88}
                                        layout="responsive"
                                        priority
                                    />
                                    <Box className="logo-text">
                                        <Typography variant="body2" className="title">
                                            {brandInfo.title}
                                        </Typography>
                                        <Typography variant="caption" className="desc">
                                            {brandInfo.desc}
                                        </Typography>
                                    </Box>
                                </Link>
                            ))}
                        </Grid>
                        <Grid size="grow">
                            <Box className="layout-header-action" data-aos="fade-down">
                                <Box className={`action search-container ${isSearchOpen ? 'active' : ''}`}>
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
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        autoFocus
                                        onBlur={() => setIsSearchOpen(false)}
                                    />
                                    <IconButton
                                        className="link search"
                                        title={isSearchOpen ? "ปิดการค้นหา" : "ค้นหา"}
                                        aria-label={isSearchOpen ? "ปิดการค้นหา" : "ค้นหา"}
                                        onClick={handleSearchToggle}
                                    >
                                        {isSearchOpen ? <CloseIcon /> : <SearchIcon />}
                                        {isSearchOpen ? "ปิด" : "ค้นหา"}
                                    </IconButton>
                                </Box>
                                <Box className="action">
                                    <div className={`dropdown ${isLangOpen ? 'open' : ''}`}>
                                        <a href="#" className={`dropdown-toggle  ${isLangOpen ? 'active' : ''}`} title="language th"
                                            onClick={handleLangToggle} data-toggle="dropdown"
                                        >
                                            ไทย
                                        </a>
                                        <ul className={`dropdown-menu ${isLangOpen ? 'show' : ''}`}>
                                            <li>
                                                <Link href="https://admc-en.wewebplus.com/" className="link" title="language en">
                                                    ENG
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://admc-fr.wewebplus.com/" className="link" title="language fr">
                                                    FRA
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Box>
                            </Box>
                        </Grid>
                        <Box className="layout-header-mobile" data-aos="fade-down">
                            <Box className={`action menu-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
                                <IconButton
                                    className="menu-mobile-btn"
                                    aria-label="เมนูหลัก"
                                    onClick={handleMobileMenuToggle}
                                >
                                    {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                    <Box className="layout-header-nav">
                        <Box component="nav" className={`layout-header-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                            <ul className="nav-list" data-aos="fade-up">
                                {navItems.map((item) => (
                                    <li key={item.id} 
                                        className={`${item.dropdown ? `dropdown` : ''} ${isNavItemActive(item) ? "active" : ""}`}
                                    >
                                        <Link href={`${item.dropdown ? '#' : item.linkUrl}`}
                                            className={`link ${item.dropdown ? `dropdown-toggle` : ''}`} 
                                            title={item.title}
                                            {...(item.dropdown && { 'data-toggle': 'dropdown' })}
                                                onClick={(e) => {
                                                    if (item.dropdown) {
                                                        handleDropdownToggle(e);
                                                    } else {
                                                        closeOverlayAndPopups();
                                                    }
                                                }
                                            }
                                        >
                                            {item.title}
                                        </Link>
                                        {item.dropdown &&(
                                            <div className={`dropdown-menu`}>
                                                <Container className="container dropdown-row">
                                                    <ul className="item-list">
                                                        {item.dropdownItems?.map((link) => (
                                                            <li key={link.id} className={`${isNavDropdownActive(link) ? "active" : ""}`}>
                                                                <Link href={link.linkUrl} className="link" title={link.title}
                                                                    onClick={closeOverlayAndPopups}
                                                                >
                                                                    {link.title}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    {item.dropdown && item.imageUrl && (
                                                        <div className="thumb">
                                                            <Link href={item.imageLink || '#'} className="wrapper" title={item.imageAlt}
                                                                onClick={closeOverlayAndPopups}
                                                            >
                                                                <figure className="ratio ratio-16x9">
                                                                    <Image className="cover-img"
                                                                        loader={imageLoader}
                                                                        src={item.imageUrl}
                                                                        alt={item.imageAlt || ''}
                                                                        width={364}
                                                                        height={205}
                                                                    />
                                                                </figure>
                                                                <Box className="text">
                                                                    <Typography variant="body2" className="txt">
                                                                        {item.imageAlt}
                                                                    </Typography>
                                                                    <span className="icon">
                                                                        <EastIcon/>
                                                                    </span>
                                                                </Box>
                                                            </Link>
                                                        </div>
                                                    )}
                                                </Container>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
