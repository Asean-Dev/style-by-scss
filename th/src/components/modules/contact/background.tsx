"use client";

import React from 'react';
import Image from 'next/image';

// libs
import {imageLoader} from "@/libs/imageLoader";

export default function ContactBG() {
    return (
        <div className="bg-cover">
            <Image className="cover-img"
                loader={imageLoader}
                src="/img/background/bg-contact.jpg" 
                alt="background contact"
                width={4037}
                height={1343}
                priority
            />
        </div>
    )
}