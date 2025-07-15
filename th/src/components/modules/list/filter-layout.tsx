"use client";

import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

// icon
import GridViewIcon from '@mui/icons-material/GridView';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

// scss
import "@/assets/scss/components/_button.scss";

// types
import {ListFilterLayoutType} from "@/types/list";

type Props = {
    listFilterLayout: ListFilterLayoutType[],
}

export default function ListFilterLayout({ listFilterLayout }: Props) {
    const currentPath = usePathname();
    const isNavItemActive = (item: ListFilterLayoutType): boolean => {
        if (item.pathSegment === `${item.linkUrl}`) {
            return currentPath === `${item.linkUrl}`;
        }
        return item.pathSegment ? currentPath.startsWith(`/${item.pathSegment}`) : false;
    };
    return (
        <div className="filter-layout">
            <ul className="item-list">
                {listFilterLayout.map((item) => (
                    <li key={item.id} className={`${isNavItemActive(item) ? "active" : ""}`} >
                        <Link href={item.linkUrl} className="link" title={item.title}>
                            {item.title === 'grid' &&(
                                <GridViewIcon/>
                            )}
                            {item.title === 'list' &&(
                                <FormatListBulletedIcon/>
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}