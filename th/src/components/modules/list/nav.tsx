"use client";

import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

// types
import {layoutNav} from "@/types/nav";

type Props = {
    ListNav: layoutNav[],
}

export default function LayoutNav({ ListNav }: Props) {
    const currentPath = usePathname();
    const isNavItemActive = (item: layoutNav): boolean => {
        if (item.pathSegment === `${item.linkUrl}`) {
            return currentPath === `${item.linkUrl}`;
        }
        return item.pathSegment ? currentPath.startsWith(`/${item.pathSegment}`) : false;
    };
    return (
        <>
            <div className="layout-nav">
                <ul className="item-list">
                    {ListNav.map((item) => (
                        <li key={item.id} className={isNavItemActive(item) ? "active" : ""}>
                            <Link href={item.linkUrl} className="link" title={item.title}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
