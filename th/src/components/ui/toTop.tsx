import Box from '@mui/material/Box';
import { Fab, Fade } from '@mui/material';
import { useScrollTrigger } from '@mui/material';
import * as React from 'react';

import { PropsType } from '@/types/component-props';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ScrollToTopInternal(props: PropsType & { children: React.ReactElement }) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#header');
        const targetWindow = window ? window() : globalThis.window;
        targetWindow?.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Fade in={trigger}>
            <Box onClick={handleClick} className="totop">
                {children}
            </Box>
        </Fade>
    );
}

export default function ToTop(props: PropsType) {
    return (
        <ScrollToTopInternal {...props}>
            <Fab size="small" aria-label="scroll back to top">
                <ArrowUpwardIcon />
            </Fab>
        </ScrollToTopInternal>
    );
}
