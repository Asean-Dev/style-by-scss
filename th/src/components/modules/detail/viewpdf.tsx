"use client";

import React from 'react';

// types
import type {detailPDF} from "@/types/detail";

type Props = {
    detailPDF: detailPDF,
}

export default function DetailViewPDF({ detailPDF }: Props) {
    return (
        <>
            <div className="layout-gallery -viewpdf">
                <div className="pdf">
                    <iframe src={detailPDF.file} />
                </div>
                {detailPDF.note &&(
                    <div className="note">
                        {detailPDF.note}
                    </div>
                )}
            </div>
        </>
    )
}