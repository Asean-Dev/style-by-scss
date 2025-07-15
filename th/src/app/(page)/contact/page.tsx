"use client";

import React,{ useEffect } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import ContactBG from "@/components/modules/contact/background";
import ContactHead from "@/components/modules/contact/sc-head";
import ContactForm from "@/components/modules/contact/sc-form";
import ContactMap from "@/components/modules/contact/sc-map";
import ContactBody from "@/components/modules/contact/sc-body";

// scss
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_contact.scss";

export default function page_contact_index() {
    useEffect(() => {
        document.body.classList.add('layout-inner');
        return () => {
            document.body.classList.remove('layout-inner');
        };
    }, []);
    
    return (
        <>
            <Box component="section" id="contact" className="section sc-contact">
                <ContactBG/>
                <Container className="container">
                    <ContactHead/>
                    <ContactForm/>
                    <ContactMap/>
                    <ContactBody/>
                </Container>
            </Box>
        </>
    );
}
