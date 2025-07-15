"use client";

import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function btn_back() {
    const router = useRouter();
    return (
        <>
            <Link href="" onClick={router.back} className="link" title="ย้อนกลับ">
                <span className="icon">
                    <KeyboardBackspaceIcon/>
                </span>
                <strong className="txt">ย้อนกลับ</strong>
            </Link>
        </>
    );
}
