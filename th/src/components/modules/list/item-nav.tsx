"use client";

import React,{ useState } from 'react';
import Link from "next/link";

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';

// components
import IconMenu from "@/components/ui/icon-menu";

// scss
import "@/assets/scss/components/_button.scss";

// types
import {LayoutListItemNav} from "@/types/list";

type Props = {
    ListItemNav: LayoutListItemNav[],
}

export default function LayoutItemNav({ ListItemNav }: Props) {
    const [openSections, setOpenSections] = useState<Record<number, boolean>>({});
    const handleSectionToggle = (sectionId: number) => {
        setOpenSections(prevOpenSections => ({
            ...prevOpenSections,
            [sectionId]: !prevOpenSections[sectionId]
        }));
    };

    return (
        <>
            <div className="layout-action-wrapper">
                {ListItemNav.map((item) => (
                    <div key={item.id} className={`layout-action ${openSections[item.id] ? 'open' : ''}`}>
                        <div className="inner">
                            <Typography variant="body1" className="h5 sub">
                                <strong>{item.sub}</strong>
                            </Typography>
                            <Typography variant="h2" className="h4 title">
                                <strong>{item.title}</strong>
                            </Typography>
                            <div className={`action`}>
                                <IconButton className="menu-btn"
                                    aria-label={`Toggle ${item.title} section`}
                                    onClick={() => handleSectionToggle(item.id)}
                                >
                                    {openSections[item.id] ?  <RemoveIcon /> : <IconMenu/>}
                                </IconButton>
                            </div>
                        </div>
                        <nav className="action-list">
                            <ul className="nav-list">
                                {item.ordermenu.map((navList) => (
                                    <li key={navList.id} className={navList.status}>
                                        <Link href={navList.linkUrl} className="link" title={navList.title}>
                                            {navList.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                ))}
            </div>
        </>
    );
}
