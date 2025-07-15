"use client";

import React from 'react';
import Typography from '@mui/material/Typography';

// components
import Share from "@/components/modules/detail/share";

// types
import type {detailHeadInfo} from "@/types/detail";

type Props = {
    detailHeadInfo: detailHeadInfo,
}

export default function DetailHeadInfo({ detailHeadInfo }: Props) {
    return (
        <>
            <div className="layout-head-info">
                <Typography variant="h2" className="h4 title">
                    <strong>{detailHeadInfo.title}</strong>
                </Typography>
            </div>
            <div className="layout-info">
                <small className="date">{detailHeadInfo.date}</small>
                <Share/>
            </div>
        </>
    )
}