import React from 'react';
import type { Metadata } from "next";

import Box from '@mui/material/Box';

import Header from "@/components/layouts/header";
import Widget from "@/components/layouts/widget";
import Footer from "@/components/layouts/footer";
import Accessibility from "@/components/ui/accessibility";

// scss
import "@/assets/scss/components/accessibility.scss";

export const metadata: Metadata = {
    title: "หน้าหลัก | The Administrative Court Thai",
    description: "The Administrative Court Thai",
    keywords: 'Administrative Court, ADMC, ศาลปกครอง',
};

export default async function page_home({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <Box component="main" className="layout-body">
                {children}
            </Box>
            <Widget />
            <Accessibility />
            <Footer />
        </>
    );
}