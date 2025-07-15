"use client";

import React,{ useEffect } from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// components
import ListSCHead from "@/components/modules/list/sc-head";
import ListNav from "@/components/modules/list/nav";
import ListFilterTags2 from "@/components/modules/list/filter-tags2";

// scss
import "@/assets/scss/layouts/_main.scss";
import "@/assets/scss/modules/_list.scss";

// constant
import { PublicRelationsAnnouncementsScoreSCHeadList } from "@/constant/index-list";
import { PublicRelationsNav } from "@/constant/index-list";
import { PublicRelationAnnouncementsHilight } from "@/constant/index-list";
import { PublicRelationAnnouncementsTag } from "@/constant/index-list";
import { PublicRelationsAnnouncementsListItem } from "@/constant/index-list";

// libs
import {imageLoader} from "@/libs/imageLoader";

export default function page_publicRelations_list() {
    useEffect(() => {
        document.body.classList.add('layout-inner');
        return () => {
            document.body.classList.remove('layout-inner');
        };
    }, []);

    return (
        <>
            <Box component="section" id="list" className="section sc-list">
                <ListSCHead ListSCHeader={PublicRelationsAnnouncementsScoreSCHeadList}/>
                <Box className="sc-body">
                    <Container className="container">
                        <div className="layout-list">
                            <ListNav ListNav={PublicRelationsNav}/>
                            <div className="layout-content">
                                <ListFilterTags2 listFilterTags={PublicRelationAnnouncementsTag}/>
                                <Image className="cover-img"
                                    loader={imageLoader}
                                    src="/img/static/Improve-system.jpg"
                                    alt="ขออภัย อยู่ระหว่างปิดปรับปรุงระบบ"
                                    width={1296}
                                    height={729}
                                    layout="responsive"
                                />
                            </div>
                        </div>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
