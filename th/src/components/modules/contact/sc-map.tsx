'use client';

import React from 'react';

import Box from '@mui/material/Box';


// Import custom styles
import "@/assets/scss/components/_form.scss";

function ContactMap() {
    return (
        <div className="map">
            <Box component="figure" className="map-cover">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d52110.99053067368!2d100.53909028711558!3d13.888629001271841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e283217cee0e27%3A0x63ca95a0d9065f9b!2z4Lio4Liy4Lil4Lib4LiB4LiE4Lij4Lit4LiH!5e0!3m2!1sth!2sth!4v1749197641125!5m2!1sth!2sth" width="600" height="450" loading="lazy"></iframe>
            </Box>
        </div>
    );
}
export default ContactMap