"use client";

import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

// scss
import "@/assets/scss/components/_button.scss";

// types
import {ListFilterTags} from "@/types/list";

type Props = {
    listFilterTags: ListFilterTags[],
}

export default function ListFilterTag2({ listFilterTags }: Props) {
    const currentPath = usePathname();
    const isNavItemActive = (item: ListFilterTags): boolean => {
        if (item.pathSegment === `${item.linkUrl}`) {
            return currentPath === `${item.linkUrl}`;
        }
        return item.pathSegment ? currentPath.startsWith(`/${item.pathSegment}`) : false;
    };
    return (
        <div className="filter-tag -top">
            <ul className="item-list">
                {listFilterTags.map((item) => (
                    <li key={item.id} className={`${isNavItemActive(item) ? "active" : ""} ${item.status || ""}`} >
                        <Link href={item.linkUrl} className="btn btn-secondary outline" title={item.title}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}