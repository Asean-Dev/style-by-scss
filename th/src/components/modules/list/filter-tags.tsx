"use client";

import React from 'react';
import Link from "next/link";

// scss
import "@/assets/scss/components/_button.scss";

// types
import {ListFilterTags} from "@/types/list";

type Props = {
    listFilterTags: ListFilterTags[],
}

export default function ListFilterTag({ listFilterTags }: Props) {
    return (
        <div className="filter-tag">
            <ul className="item-list">
                {listFilterTags.map((item) => (
                    <li key={item.id} className={item.status} >
                        <Link href={item.linkUrl} className="btn btn-secondary outline" title={item.title}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}