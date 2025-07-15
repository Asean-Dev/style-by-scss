"use client";

import React from 'react';

// types
import type {detailCMS} from "@/types/detail";

type Props = {
    detailCMS: detailCMS,
}

export default function DetailCms({ detailCMS }: Props) {
    return (
        <div className="layout-cms">
            {detailCMS.text}
        </div>
    )
}