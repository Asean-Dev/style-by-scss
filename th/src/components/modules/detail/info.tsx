"use client";

import React from 'react';

// components
import Share from "@/components/modules/detail/share";

// types
import type {detailInfo} from "@/types/detail";

type Props = {
    detailInfo: detailInfo,
}

export default function DetailInfo({ detailInfo }: Props) {
    return (
        <div className="layout-info">
            <strong className="txt-date">วันที่ประกาศข่าว: {detailInfo.date}</strong>
            <Share/>
        </div>
    )
}