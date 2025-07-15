import React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';

// libs
import {imageLoader} from "@/libs/imageLoader";

export default function OtherLink() {
    return (
        <Box className="layout-footer-link">
            {/* <a href="http://ipv6-test.com/validate.php?" className="link" target="_self" 
                rel="nofollow" title="ipv6 ready" data-aos="fade-up"
            >
                <Image 
                    loader={imageLoader}
                    src="img/static/ipv6-big.webp" 
                    alt="ipv6 ready" 
                    width={100}
                    height={50}
                />
            </a> */}
            <a href="#" className="link" target="_self" 
                rel="nofollow" title="Google Analytics" data-aos="fade-up"
            >
                <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M22.3566 21.6396C22.3587 22.0433 22.2813 22.4434 22.1287 22.8172C21.9761 23.191 21.7513 23.531 21.4672 23.818C21.1831 24.1049 20.8452 24.3332 20.4729 24.4896C20.1005 24.646 19.701 24.7277 19.297 24.7298C19.1705 24.7308 19.044 24.7236 18.9184 24.7084C18.1569 24.5958 17.4629 24.2088 16.9671 23.6203C16.4712 23.0318 16.2078 22.2824 16.2265 21.5133V3.21636C16.2083 2.44655 16.4724 1.69667 16.9692 1.1081C17.466 0.51954 18.1611 0.132968 18.9234 0.0212805C19.3559 -0.029877 19.7943 0.0114545 20.2096 0.142534C20.6249 0.273613 21.0076 0.491443 21.3322 0.781576C21.6568 1.07171 21.916 1.42751 22.0926 1.82539C22.2692 2.22326 22.3591 2.65411 22.3564 3.08936L22.3566 21.6396Z" fill="#F9AB00"/>
                    <path d="M3.06553 18.6073C3.67183 18.6073 4.26452 18.787 4.76864 19.1237C5.27276 19.4603 5.66568 19.9388 5.8977 20.4987C6.12972 21.0585 6.19043 21.6745 6.07215 22.2689C5.95386 22.8632 5.6619 23.4091 5.23318 23.8376C4.80446 24.266 4.25823 24.5578 3.66358 24.6761C3.06893 24.7943 2.45255 24.7336 1.8924 24.5017C1.33225 24.2698 0.853478 23.8771 0.516634 23.3733C0.17979 22.8695 0 22.2771 0 21.6711C0 20.8586 0.322974 20.0793 0.897872 19.5047C1.47277 18.9301 2.2525 18.6073 3.06553 18.6073ZM11.131 9.32129C10.3128 9.36611 9.54413 9.72739 8.98774 10.3287C8.43134 10.9299 8.13089 11.724 8.14999 12.5428V20.7719C8.14999 23.0054 9.13351 24.3608 10.5742 24.6486C10.9694 24.7287 11.3765 24.7303 11.7724 24.6531C12.1682 24.576 12.5449 24.4216 12.881 24.1989C13.2171 23.9762 13.506 23.6894 13.7312 23.3551C13.9564 23.0207 14.1135 22.6453 14.1935 22.2503C14.2352 22.0468 14.2557 21.8396 14.2546 21.6319V12.4015C14.2554 11.9978 14.1767 11.5978 14.0228 11.2245C13.869 10.8512 13.643 10.5119 13.358 10.2259C13.0729 9.93982 12.7342 9.71272 12.3613 9.55751C11.9884 9.40231 11.5885 9.32204 11.1846 9.32129H11.131Z" fill="#E37400"/>
                </g>
                <defs>
                    <clipPath>
                        <rect width="22.3565" height="24.7349" fill="white"/>
                    </clipPath>
                </defs>
                </svg>
            </a>
            <a href="https://www.w3.org/WAI/WCAG2AA-Conformance" className="link" target="_self" 
                rel="nofollow" title="Explanation of WCAG 2 Level AA conformance" data-aos="fade-up"
            >
                <Image 
                    loader={imageLoader}
                    src="https://www.w3.org/WAI/WCAG21/wcag2.1AA-blue-v.svg" 
                    alt="Level AA conformance, W3C WAI Web Content Accessibility Guidelines 2.1" 
                    width={300}
                    height={106}
                />
            </a>
            <a href="#" className="link" target="_self" 
                rel="nofollow" title="aChecker WCAG 2-AA" data-aos="fade-up"
            >
                <Image 
                    loader={imageLoader}
                    src="/img/static/achecker-wcag2-aa.webp" 
                    alt="aChecker WCAG 2-AA" 
                    width={254}
                    height={80}
                />
            </a>
        </Box>
    );
}
