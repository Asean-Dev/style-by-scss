"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// components
import IconPdf from "@/components/ui/icon-pdf";
import IconDoc from "@/components/ui/icon-doc";

// libs
import {imageLoader} from "@/libs/imageLoader";

// types
import {LayoutListAccordion} from "@/types/list";

type Props = {
    ListAccordion: LayoutListAccordion[],
}

export default function LayoutItem({ ListAccordion }: Props) {
    return (
        <>
            <div className="layout-item-accordion">
                <ul className="item-list">
                    {ListAccordion.map((item) => (
                        <li key={item.id}>
                            <Accordion slotProps={{ heading: { component: 'h2' } }} defaultExpanded={item.status === 'open'}>
                                <AccordionSummary id={`panel${item.id}`}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${item.id}`}
                                >
                                    {item.title}
                                </AccordionSummary>
                                <AccordionDetails>
                                    {item.file &&(
                                        <div className="pdf">
                                            <iframe src={item.file} />
                                        </div>
                                    )}
                                    {item.desc &&(
                                        <div className="layout-cms">
                                            {item.desc}
                                        </div>
                                    )}
                                    {item.download &&(
                                        <div className="layout-item-thumb layout-download">
                                            <ul className="item-list">
                                                {item.download.map((itemList) => (
                                                    <li key={itemList.id} className="fluid">
                                                        <div className="wrapper">
                                                            {itemList.image &&(
                                                                <Link href={itemList.linkUrl} className="thumb" title={itemList.title}>
                                                                    <figure className="ratio ratio-1x1">
                                                                        <Image className="cover-img"
                                                                            loader={imageLoader}
                                                                            src={itemList.image}
                                                                            alt={itemList.title}
                                                                            width={180}
                                                                            height={180}
                                                                        />
                                                                    </figure>
                                                                </Link>
                                                            )}
                                                            {itemList.iconlist &&(
                                                                <div className="icon-item">
                                                                    {itemList.iconlist.map((itemListIcon) => (
                                                                        <div key={itemListIcon.id} className={`icon ${itemListIcon.iconType}`}>
                                                                            {itemListIcon.iconType === 'pdf' && (
                                                                                <IconPdf/>
                                                                            )}
                                                                            {itemListIcon.iconType === 'doc' && (
                                                                                <IconDoc/>
                                                                            )}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                            <div className="content">
                                                                <Typography variant="h3" className="h6 title text-limit">
                                                                    <strong>{itemList.title}</strong>
                                                                </Typography>
                                                                {itemList.desc &&(
                                                                    <Typography variant="body1" className="desc text-limit">
                                                                        {itemList.desc}
                                                                    </Typography>
                                                                )}
                                                                <div className="box">
                                                                    <div className="item date">{itemList.date}</div>
                                                                    {itemList.case && (
                                                                        <div className="item case">{itemList.case}</div>
                                                                    )}
                                                                    {itemList.tag && (
                                                                        <div className="item tag">{itemList.tag}</div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="action content">
                                                                <div className="btn-box">
                                                                    <Link href={itemList.linkUrl} className="btn btn-secondary outline" title="อ่านต่อ">
                                                                        อ่านต่อ
                                                                    </Link>
                                                                    <Link href={itemList.btnUrl} className="btn btn-secondary" title="ดาวน์โหลดเอกสาร">
                                                                        <div className="ic">
                                                                            <span className="feather icon-download"></span>
                                                                        </div>
                                                                        ดาวน์โหลดเอกสาร
                                                                    </Link>
                                                                </div>
                                                                <div className="box">
                                                                    <div className="item">
                                                                        <div className="ic">
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M21 4H3M21 20H3M9 9.25H3M9 14.75H3M14.6 16H19.4C19.9601 16 20.2401 16 20.454 15.891C20.6422 15.7951 20.7951 15.6422 20.891 15.454C21 15.2401 21 14.9601 21 14.4V9.6C21 9.03995 21 8.75992 20.891 8.54601C20.7951 8.35785 20.6422 8.20487 20.454 8.10899C20.2401 8 19.9601 8 19.4 8H14.6C14.0399 8 13.7599 8 13.546 8.10899C13.3578 8.20487 13.2049 8.35785 13.109 8.54601C13 8.75992 13 9.03995 13 9.6V14.4C13 14.9601 13 15.2401 13.109 15.454C13.2049 15.6422 13.3578 15.7951 13.546 15.891C13.7599 16 14.0399 16 14.6 16Z" stroke="#B18F30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                                            </svg>
                                                                        </div>
                                                                        {itemList.page} หน้า
                                                                    </div>
                                                                    <div className="item">
                                                                        <div className="ic">
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M21 15V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V15M17 10L12 15M12 15L7 10M12 15V3" stroke="#B18F30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                                            </svg>
                                                                        </div>
                                                                        {itemList.size} MB
                                                                    </div>
                                                                    <div className="item">
                                                                        <div className="ic">
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M12 20H5.2C4.07989 20 3.51984 20 3.09202 19.782C2.71569 19.5903 2.40973 19.2843 2.21799 18.908C2 18.4802 2 17.9201 2 16.8V7.2C2 6.07989 2 5.51984 2.21799 5.09202C2.40973 4.71569 2.71569 4.40973 3.09202 4.21799C3.51984 4 4.07989 4 5.2 4H5.6C7.84021 4 8.96031 4 9.81596 4.43597C10.5686 4.81947 11.1805 5.43139 11.564 6.18404C12 7.03968 12 8.15979 12 10.4M12 20V10.4M12 20H18.8C19.9201 20 20.4802 20 20.908 19.782C21.2843 19.5903 21.5903 19.2843 21.782 18.908C22 18.4802 22 17.9201 22 16.8V7.2C22 6.07989 22 5.51984 21.782 5.09202C21.5903 4.71569 21.2843 4.40973 20.908 4.21799C20.4802 4 19.9201 4 18.8 4H18.4C16.1598 4 15.0397 4 14.184 4.43597C13.4314 4.81947 12.8195 5.43139 12.436 6.18404C12 7.03968 12 8.15979 12 10.4" stroke="#B18F30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                                            </svg>
                                                                        </div>
                                                                        {itemList.read} ครั้ง
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </AccordionDetails>
                            </Accordion>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
