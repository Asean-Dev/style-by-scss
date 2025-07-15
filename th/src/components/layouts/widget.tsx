"use client"

import React, { useState, useEffect, useRef } from 'react';
import { PropsType } from '@/types/component-props';

import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';

import SocialNav from "@/components/ui/social";

import "@/assets/scss/layouts/_widget.scss";


export default function Widget(props: PropsType) {
    const widgetRef = useRef<HTMLDivElement>(null);

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isSocialToggleOpen, setIsSocialToggleOpen] = useState(false);

    const handleSocialToggle = () => {
        setIsSocialToggleOpen(!isSocialToggleOpen);
        if (isSearchOpen) {
            setIsSearchOpen(false);
        }
    };

    useEffect(() => {
        const widgetElement = widgetRef.current;
        const footerElement = document.querySelector('#footer') as HTMLElement | null;

        if (!widgetElement || !footerElement) {
            console.warn("Widget or Footer element not found for scroll effect.");
        }

        let handleScroll: (() => void) | null = null;
        if (widgetElement && footerElement) {
            handleScroll = () => {
                const scrollBottom = window.scrollY + window.innerHeight;
                const footerTop = footerElement.offsetTop;
                const buffer = 20;

                if (scrollBottom >= footerTop - buffer) {
                    widgetElement.classList.add('off');
                } else {
                    widgetElement.classList.remove('off');
                }
            };

            window.addEventListener('scroll', handleScroll);
            handleScroll();
        }

    }, []);

    return (
        <>
            <Box className={`layout-widget  ${isSocialToggleOpen ? 'active' : ''}`} ref={widgetRef}>
                <SocialNav />
                <Box className="layout-widget-topic">
                    ช่องทาง <br />
                    ติดตาม
                </Box>
                <Box className="layout-widget-btn" onClick={handleSocialToggle}>
                    <Box className="inner">
                        {isSocialToggleOpen ? 
                            <CloseIcon/>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path data-name="Path 452012" d="M14.4,1.648,9.519,6.526c-.009.009-.015.021-.025.03a7.05,7.05,0,0,1,3.581.391l3.311-3.311a2.812,2.812,0,0,1,3.977,3.977l-4.878,4.878a2.843,2.843,0,0,1-3.977,0,1.408,1.408,0,0,0-1.989,0l-.854.854a5.577,5.577,0,0,0,.854,1.135,5.666,5.666,0,0,0,7.925.025c.009-.009.021-.015.03-.025L22.352,9.6A5.625,5.625,0,1,0,14.4,1.648Z" fill="#fff"/>
                                <path data-name="Path 452013" d="M10.935,17.042,7.614,20.364a2.812,2.812,0,0,1-3.977-3.977L8.525,11.5a2.843,2.843,0,0,1,3.977,0,1.408,1.408,0,0,0,1.989,0l.854-.854a5.574,5.574,0,0,0-.854-1.135,5.663,5.663,0,0,0-7.925-.025c-.009.009-.021.015-.03.025L1.648,14.4A5.625,5.625,0,0,0,9.6,22.353l4.889-4.889c.009-.009.015-.021.025-.03a7.05,7.05,0,0,1-3.581-.391Z" fill="#fff"/>
                            </svg>
                        }
                    </Box>
                </Box>
            </Box>
        </>
    );
}
