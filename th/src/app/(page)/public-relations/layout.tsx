import React from 'react';
import type { Metadata } from "next";

// scss
import "@/assets/scss/layouts/_layout-inner.scss";

export const metadata: Metadata = {
    title: "ประชาสัมพันธ์ | The Administrative Court Thai",
    description: "The Administrative Court Thai",
    keywords: 'Administrative Court, ADMC, ศาลปกครอง',
};

export default async function page_publicRelations({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}