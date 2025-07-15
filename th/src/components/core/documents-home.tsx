'use client';

import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

// Import Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import custom styles
import "@/assets/scss/components/_swiper.scss";
import "@/assets/scss/modules/_documents-home.scss";

// libs
import {imageLoader} from "@/libs/imageLoader";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div id={`doc-tabpanel-${index}`} role="tabpanel" hidden={value !== index}
            aria-labelledby={`doc-tab-${index}`}
            {...other}
        >
            {value === index && <Box className="tab-panel">{children}</Box>}
        </div>
    );
}
function a11yProps(index: number) {
    return {
        id: `doc-tab-${index}`,'aria-controls': `doc-tab-${index}`,
    };
}

interface DocData {
    id: number;
    linkUrl: string;
    imageUrl: string;
    title: string;
    desc: string;
    tag: string;
    date: string;
    view: string;
}
const docData: DocData[] = [
    {
        id: 1,
        linkUrl: '#',
        imageUrl: '/img/upload/book.jpg',
        title: 'รวมบทความทางวิชาการ เล่ม 3 ประกอบด้วย บทความทางวิชาการ การบรรยายทางวิชาการ (เอกสารอิเล็กทรอนิกส์)',
        desc: 'เมื่อวันที่ 3 ตุลาคม 2567 เวลา 09.30 น. นายประสิทธิ์ศักดิ์ มีลาภ ประธานศาลปกครองสูงสุด ได้แถลงนโยบายการบริหารงานศาลปกครอง ประจำปีงบประมาณ พ.ศ. 2568-2570 เพื่อให้ตุลาการศาลปกครอง ประธานศาลปกครอง สูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นศาลปกครองสูงสุด',
        tag: 'วารสาร / หนังสือราชการ',
        date: '3 ตุลาคม 2567',
        view: '982 ครั้ง',
    },
    {
        id: 2,
        linkUrl: '#',
        imageUrl: '/img/upload/book.jpg',
        title: 'รวมบทความทางวิชาการ เล่ม 3 ประกอบด้วย บทความทางวิชาการ การบรรยายทางวิชาการ (เอกสารอิเล็กทรอนิกส์)',
        desc: 'เมื่อวันที่ 3 ตุลาคม 2567 เวลา 09.30 น. นายประสิทธิ์ศักดิ์ มีลาภ ประธานศาลปกครองสูงสุด ได้แถลงนโยบายการบริหารงานศาลปกครอง ประจำปีงบประมาณ พ.ศ. 2568-2570 เพื่อให้ตุลาการศาลปกครอง ประธานศาลปกครอง สูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นศาลปกครองสูงสุด',
        tag: 'วารสาร / หนังสือราชการ',
        date: '3 ตุลาคม 2567',
        view: '982 ครั้ง',
    },
    {
        id: 3,
        linkUrl: '#',
        imageUrl: '/img/upload/book.jpg',
        title: 'รวมบทความทางวิชาการ เล่ม 3 ประกอบด้วย บทความทางวิชาการ การบรรยายทางวิชาการ (เอกสารอิเล็กทรอนิกส์)',
        desc: 'เมื่อวันที่ 3 ตุลาคม 2567 เวลา 09.30 น. นายประสิทธิ์ศักดิ์ มีลาภ ประธานศาลปกครองสูงสุด ได้แถลงนโยบายการบริหารงานศาลปกครอง ประจำปีงบประมาณ พ.ศ. 2568-2570 เพื่อให้ตุลาการศาลปกครอง ประธานศาลปกครอง สูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นศาลปกครองสูงสุด',
        tag: 'วารสาร / หนังสือราชการ',
        date: '3 ตุลาคม 2567',
        view: '982 ครั้ง',
    },
    {
        id: 4,
        linkUrl: '#',
        imageUrl: '/img/upload/book.jpg',
        title: 'รวมบทความทางวิชาการ เล่ม 3 ประกอบด้วย บทความทางวิชาการ การบรรยายทางวิชาการ (เอกสารอิเล็กทรอนิกส์)',
        desc: 'เมื่อวันที่ 3 ตุลาคม 2567 เวลา 09.30 น. นายประสิทธิ์ศักดิ์ มีลาภ ประธานศาลปกครองสูงสุด ได้แถลงนโยบายการบริหารงานศาลปกครอง ประจำปีงบประมาณ พ.ศ. 2568-2570 เพื่อให้ตุลาการศาลปกครอง ประธานศาลปกครอง สูงสุดแถลงนโยบายเน้นย้ำการบริหารจัดการคดีและบังคับคดีด้วยความเป็นศาลปกครองสูงสุด',
        tag: 'วารสาร / หนังสือราชการ',
        date: '3 ตุลาคม 2567',
        view: '982 ครั้ง',
    },
];

function DocumentsSection() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box component="section" id="documents" className="section sc-documents">
            <Box className="sc-inner">
                <Container className="container">
                    <Box className="sc-head">
                        <Typography variant="h2" className="h2 title" data-aos="fade-down">
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                                    <g transform="translate(0 0)">
                                        <g data-name="Group 89216">
                                        <g data-name="Group 89215">
                                            <path data-name="Path 451904" d="M11.5,17.026a.976.976,0,1,0,0,1.381A.977.977,0,0,0,11.5,17.026Z" fill="#121d77"/>
                                        </g>
                                        </g>
                                        <g data-name="Group 89218">
                                        <g data-name="Group 89217">
                                            <path data-name="Path 451905" d="M24.726,43.723a3.419,3.419,0,0,0-2.755-5.442H5.371a3.416,3.416,0,0,0-2.752,5.441A4.887,4.887,0,0,0,0,48.045v.977A.977.977,0,0,0,.977,50h25.39a.977.977,0,0,0,.977-.977v-.977A4.886,4.886,0,0,0,24.726,43.723ZM4.335,40.662a1.455,1.455,0,0,1,1.036-.429h16.6a1.465,1.465,0,1,1,0,2.93H5.371a1.465,1.465,0,0,1-1.036-2.5ZM1.953,48.045a2.933,2.933,0,0,1,2.93-2.93H22.46a2.933,2.933,0,0,1,2.93,2.93Z" fill="#121d77"/>
                                        </g>
                                        </g>
                                        <g data-name="Group 89220">
                                        <g data-name="Group 89219">
                                            <path data-name="Path 451906" d="M49.091,41.028a6.149,6.149,0,0,0-1.176-1.351L43.352,35.7a.969.969,0,0,0-.389-.339L40.2,32.952,27.431,21.81a2.924,2.924,0,0,0-.858-4.664l1.182-1.182a3.909,3.909,0,0,0,3.771-1.009,3.906,3.906,0,0,0,0-5.524L23.24,1.145a3.9,3.9,0,0,0-6.534,3.771L4.917,16.7a3.93,3.93,0,0,0-1.011-.132,3.906,3.906,0,0,0-2.762,6.668L9.43,31.526a3.9,3.9,0,0,0,6.534-3.771l1.179-1.179a2.93,2.93,0,0,0,4.666.856l13.6,15.63a.981.981,0,0,0,.132.166c.017.017.036.033.054.049l4.054,4.658c.1.119.208.236.32.348A5.808,5.808,0,0,0,44.1,50a5.994,5.994,0,0,0,.822-.057,5.909,5.909,0,0,0,4.36-3.018A5.778,5.778,0,0,0,49.091,41.028ZM19.1,2.526a1.952,1.952,0,0,1,2.762,0l8.286,8.286a1.953,1.953,0,0,1-2.761,2.762L19.1,5.288h0A1.955,1.955,0,0,1,19.1,2.526Zm-5.524,27.62a1.956,1.956,0,0,1-2.762,0L2.525,21.86A1.953,1.953,0,0,1,5.286,19.1l8.287,8.287A1.954,1.954,0,0,1,13.574,30.145Zm4.112-6.873L14.955,26,6.668,17.716,17.716,6.668,26,14.955,23.267,17.69l-.027.026-5.521,5.521Zm3.487,2.037-.006.006L20.479,26a.977.977,0,0,1-1.393-1.369l5.547-5.547a.977.977,0,0,1,1.657.7.968.968,0,0,1-.286.69l-.684.684-.014.014Zm2.022.74L26.048,23.2,38.133,33.736l-4.41,4.41ZM35.008,39.622l4.6-4.6,1.475,1.287-4.79,4.79ZM47.58,45.97a3.972,3.972,0,0,1-2.923,2.038,3.88,3.88,0,0,1-3.3-1.107c-.075-.075-.147-.153-.214-.233l-.009-.011-3.553-4.082,4.98-4.98,4.077,3.556.009.008a4.2,4.2,0,0,1,.806.927A3.856,3.856,0,0,1,47.58,45.97Z" fill="#121d77"/>
                                        </g>
                                        </g>
                                        <g data-name="Group 89222">
                                        <g data-name="Group 89221">
                                            <path data-name="Path 451907" d="M18.407,10.121a.977.977,0,0,0-1.381,0l-4.143,4.143a.977.977,0,0,0,1.381,1.381L18.407,11.5A.976.976,0,0,0,18.407,10.121Z" fill="#121d77"/>
                                        </g>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                            <strong>เอกสารที่เผยเเพร่</strong>
                        </Typography>
                    </Box>
                    <Box className="sc-body">
                        <Box className="tab-head">
                            <Tabs value={value} onChange={handleChange} 
                                orientation={isMobile ? 'horizontal' : 'vertical'}
                                variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile
                                aria-label="tabs" 
                                data-aos="fade-down"
                            >
                                <Tab label="ทั้งหมด" className="tab" {...a11yProps(0)} />
                                <Tab label="เเนวทางการปฏิบัติราชการ" className="tab" {...a11yProps(1)} />
                                <Tab label="วารสาร / หนังสือราชการ" className="tab" {...a11yProps(2)} />
                            </Tabs>
                            <Box className="action" data-aos="fade-up">
                                <Button
                                    component={Link}
                                    href="/"
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                >
                                    ดูทั้งหมด
                                </Button>
                            </Box>
                        </Box>
                        <Box className="tab-content">
                            <TabPanel value={value} index={0}>
                                <Swiper
                                    pagination={{
                                        clickable: true,
                                    }}
                                    slidesPerView={1}
                                    freeMode={true}
                                    // autoplay={{
                                    //     delay: 5000,
                                    //     disableOnInteraction: false,
                                    //     pauseOnMouseEnter: true,
                                    // }}
                                    navigation={true}
                                    breakpoints={{
                                        0: {
                                            spaceBetween: 16,
                                        },
                                        1200: {
                                            spaceBetween: 30,
                                        },
                                    }}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    watchSlidesProgress={true}
                                    className="sc-documents-swiper" data-aos="fade-in"
                                >
                                    {docData.map((doc) => (
                                        <SwiperSlide key={doc.id}>
                                            <Link href={doc.linkUrl} className="wrapper">
                                                <Box className="thumb">
                                                    <Box component="figure" className="ratio">
                                                        <Image 
                                                            loader={imageLoader}
                                                            src={doc.imageUrl} 
                                                            alt={doc.title}
                                                            width={480}
                                                            height={679}
                                                        />
                                                    </Box>
                                                </Box>
                                                <Box className="content">
                                                    <div className="inner">
                                                        <Typography variant="body2" className="tag" data-aos="fade-down">
                                                            {doc.tag}
                                                        </Typography>
                                                        <div className="info-date-view" data-aos="fade-up">
                                                            <div className="list">
                                                                <span className="icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.632" height="16" viewBox="0 0 15.632 16">
                                                                        <path data-name="Path 451909" d="M7.867,12.257a.473.473,0,0,0,.668,0l1.687-1.687A.472.472,0,0,0,9.554,9.9L8.2,11.255l-.617-.617a.472.472,0,0,0-.668.668Zm0,0" transform="translate(-0.753 -1.085)" fill="#121d77"/>
                                                                        <path data-name="Path 451910" d="M8.325,14.526a3.75,3.75,0,1,0-3.75-3.75A3.755,3.755,0,0,0,8.325,14.526Zm0-6.556a2.806,2.806,0,1,1-2.806,2.806A2.809,2.809,0,0,1,8.325,7.97Zm0,0" transform="translate(-0.508 -0.781)" fill="#121d77"/>
                                                                        <path data-name="Path 451911" d="M14.1,1.006h-.862V.472a.472.472,0,1,0-.945,0v.534H11.37V.472a.472.472,0,0,0-.945,0v.534H5.208V.472a.472.472,0,0,0-.945,0v.534H3.335V.472a.472.472,0,0,0-.945,0v.534H1.528A1.53,1.53,0,0,0,0,2.534V14.472A1.53,1.53,0,0,0,1.528,16H14.1a1.53,1.53,0,0,0,1.528-1.528V2.534A1.53,1.53,0,0,0,14.1,1.006Zm.583,13.466a.584.584,0,0,1-.583.583H1.528a.584.584,0,0,1-.583-.583V4.934H14.687ZM.945,2.534a.584.584,0,0,1,.583-.583H2.39v.534a.472.472,0,0,0,.945,0V1.951h.928v.534a.472.472,0,0,0,.945,0V1.951h5.217v.534a.472.472,0,0,0,.945,0V1.951H12.3v.534a.472.472,0,0,0,.945,0V1.951H14.1a.584.584,0,0,1,.583.583V3.989H.945Zm0,0" transform="translate(0 0)" fill="#121d77"/>
                                                                    </svg>
                                                                </span>
                                                                <small className="txt">{doc.date}</small>
                                                            </div>
                                                            <div className="list">
                                                                <span className="icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10.979" viewBox="0 0 16 10.979">
                                                                        <g transform="translate(0 -2.51)">
                                                                            <path data-name="Path 451912" d="M15.92,7.739a16.2,16.2,0,0,0-2.277-2.594,11.8,11.8,0,0,0-2.494-1.8A6.8,6.8,0,0,0,8,2.51a6.8,6.8,0,0,0-3.149.838,11.8,11.8,0,0,0-2.494,1.8A16.2,16.2,0,0,0,.08,7.739a.469.469,0,0,0,0,.523,16.208,16.208,0,0,0,2.277,2.594,11.8,11.8,0,0,0,2.494,1.8A6.8,6.8,0,0,0,8,13.49a6.8,6.8,0,0,0,3.149-.838,11.8,11.8,0,0,0,2.494-1.8A16.2,16.2,0,0,0,15.92,8.261a.469.469,0,0,0,0-.523Zm-2.927,2.44A7.919,7.919,0,0,1,8,12.552a7.919,7.919,0,0,1-4.993-2.373A16.05,16.05,0,0,1,1.046,8C1.791,7,4.665,3.448,8,3.448a7.919,7.919,0,0,1,4.993,2.373A16.049,16.049,0,0,1,14.955,8a16.048,16.048,0,0,1-1.962,2.179Z" fill="#121d77"/>
                                                                            <path data-name="Path 451913" d="M8,4.519A3.481,3.481,0,1,0,11.481,8,3.485,3.485,0,0,0,8,4.519Zm0,6.025A2.544,2.544,0,1,1,10.544,8,2.547,2.547,0,0,1,8,10.544Z" fill="#121d77"/>
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                                <small className="txt">{doc.view}</small>
                                                            </div>
                                                        </div>
                                                        <Typography variant="h3" className="h4 title text-limit" data-aos="fade-up">
                                                            <strong>{doc.title}</strong>
                                                        </Typography>
                                                        {/* <Typography variant="caption" className="desc text-limit">
                                                            {doc.desc}
                                                        </Typography> */}
                                                    </div>
                                                    <Box className="action" data-aos="fade-left">
                                                        <div className="btn btn-primary btn-lg outline">
                                                            อ่านเพิ่มเติม
                                                            <span className="icon" aria-hidden="true">
                                                                <span className="feather icon-arrow-right"></span>
                                                            </span>
                                                        </div>
                                                    </Box>
                                                </Box>
                                            </Link>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Swiper
                                    pagination={{
                                        clickable: true,
                                    }}
                                    slidesPerView={1}
                                    freeMode={true}
                                    // autoplay={{
                                    //     delay: 5000,
                                    //     disableOnInteraction: false,
                                    //     pauseOnMouseEnter: true,
                                    // }}
                                    navigation={true}
                                    breakpoints={{
                                        0: {
                                            spaceBetween: 16,
                                        },
                                        1200: {
                                            spaceBetween: 30,
                                        },
                                    }}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    watchSlidesProgress={true}
                                    className="sc-documents-swiper" data-aos="fade-in"
                                >
                                    {docData.map((doc) => (
                                        <SwiperSlide key={doc.id}>
                                            <Link href={doc.linkUrl} className="wrapper">
                                                <Box className="thumb">
                                                    <Box component="figure" className="ratio">
                                                        <Image 
                                                            loader={imageLoader}
                                                            src={doc.imageUrl} 
                                                            alt={doc.title}
                                                            width={480}
                                                            height={679}
                                                        />
                                                    </Box>
                                                </Box>
                                                <Box className="content">
                                                    <div className="inner">
                                                        <Typography variant="body2" className="tag" data-aos="fade-down">
                                                            {doc.tag}
                                                        </Typography>
                                                        <div className="info-date-view" data-aos="fade-up">
                                                            <div className="list">
                                                                <span className="icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.632" height="16" viewBox="0 0 15.632 16">
                                                                        <path data-name="Path 451909" d="M7.867,12.257a.473.473,0,0,0,.668,0l1.687-1.687A.472.472,0,0,0,9.554,9.9L8.2,11.255l-.617-.617a.472.472,0,0,0-.668.668Zm0,0" transform="translate(-0.753 -1.085)" fill="#121d77"/>
                                                                        <path data-name="Path 451910" d="M8.325,14.526a3.75,3.75,0,1,0-3.75-3.75A3.755,3.755,0,0,0,8.325,14.526Zm0-6.556a2.806,2.806,0,1,1-2.806,2.806A2.809,2.809,0,0,1,8.325,7.97Zm0,0" transform="translate(-0.508 -0.781)" fill="#121d77"/>
                                                                        <path data-name="Path 451911" d="M14.1,1.006h-.862V.472a.472.472,0,1,0-.945,0v.534H11.37V.472a.472.472,0,0,0-.945,0v.534H5.208V.472a.472.472,0,0,0-.945,0v.534H3.335V.472a.472.472,0,0,0-.945,0v.534H1.528A1.53,1.53,0,0,0,0,2.534V14.472A1.53,1.53,0,0,0,1.528,16H14.1a1.53,1.53,0,0,0,1.528-1.528V2.534A1.53,1.53,0,0,0,14.1,1.006Zm.583,13.466a.584.584,0,0,1-.583.583H1.528a.584.584,0,0,1-.583-.583V4.934H14.687ZM.945,2.534a.584.584,0,0,1,.583-.583H2.39v.534a.472.472,0,0,0,.945,0V1.951h.928v.534a.472.472,0,0,0,.945,0V1.951h5.217v.534a.472.472,0,0,0,.945,0V1.951H12.3v.534a.472.472,0,0,0,.945,0V1.951H14.1a.584.584,0,0,1,.583.583V3.989H.945Zm0,0" transform="translate(0 0)" fill="#121d77"/>
                                                                    </svg>
                                                                </span>
                                                                <small className="txt">{doc.date}</small>
                                                            </div>
                                                            <div className="list">
                                                                <span className="icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10.979" viewBox="0 0 16 10.979">
                                                                        <g transform="translate(0 -2.51)">
                                                                            <path data-name="Path 451912" d="M15.92,7.739a16.2,16.2,0,0,0-2.277-2.594,11.8,11.8,0,0,0-2.494-1.8A6.8,6.8,0,0,0,8,2.51a6.8,6.8,0,0,0-3.149.838,11.8,11.8,0,0,0-2.494,1.8A16.2,16.2,0,0,0,.08,7.739a.469.469,0,0,0,0,.523,16.208,16.208,0,0,0,2.277,2.594,11.8,11.8,0,0,0,2.494,1.8A6.8,6.8,0,0,0,8,13.49a6.8,6.8,0,0,0,3.149-.838,11.8,11.8,0,0,0,2.494-1.8A16.2,16.2,0,0,0,15.92,8.261a.469.469,0,0,0,0-.523Zm-2.927,2.44A7.919,7.919,0,0,1,8,12.552a7.919,7.919,0,0,1-4.993-2.373A16.05,16.05,0,0,1,1.046,8C1.791,7,4.665,3.448,8,3.448a7.919,7.919,0,0,1,4.993,2.373A16.049,16.049,0,0,1,14.955,8a16.048,16.048,0,0,1-1.962,2.179Z" fill="#121d77"/>
                                                                            <path data-name="Path 451913" d="M8,4.519A3.481,3.481,0,1,0,11.481,8,3.485,3.485,0,0,0,8,4.519Zm0,6.025A2.544,2.544,0,1,1,10.544,8,2.547,2.547,0,0,1,8,10.544Z" fill="#121d77"/>
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                                <small className="txt">{doc.view}</small>
                                                            </div>
                                                        </div>
                                                        <Typography variant="h3" className="h4 title text-limit" data-aos="fade-up">
                                                            <strong>{doc.title}</strong>
                                                        </Typography>
                                                        {/* <Typography variant="caption" className="desc text-limit">
                                                            {doc.desc}
                                                        </Typography> */}
                                                    </div>
                                                    <Box className="action" data-aos="fade-left">
                                                        <div className="btn btn-primary btn-lg outline">
                                                            อ่านเพิ่มเติม
                                                            <span className="icon" aria-hidden="true">
                                                                <span className="feather icon-arrow-right"></span>
                                                            </span>
                                                        </div>
                                                    </Box>
                                                </Box>
                                            </Link>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <Swiper
                                    pagination={{
                                        clickable: true,
                                    }}
                                    slidesPerView={1}
                                    freeMode={true}
                                    // autoplay={{
                                    //     delay: 5000,
                                    //     disableOnInteraction: false,
                                    //     pauseOnMouseEnter: true,
                                    // }}
                                    navigation={true}
                                    breakpoints={{
                                        0: {
                                            spaceBetween: 16,
                                        },
                                        1200: {
                                            spaceBetween: 30,
                                        },
                                    }}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    watchSlidesProgress={true}
                                    className="sc-documents-swiper" data-aos="fade-in"
                                >
                                    {docData.map((doc) => (
                                        <SwiperSlide key={doc.id}>
                                            <Link href={doc.linkUrl} className="wrapper">
                                                <Box className="thumb">
                                                    <Box component="figure" className="ratio">
                                                        <Image 
                                                            loader={imageLoader}
                                                            src={doc.imageUrl} 
                                                            alt={doc.title}
                                                            width={480}
                                                            height={679}
                                                        />
                                                    </Box>
                                                </Box>
                                                <Box className="content">
                                                    <div className="inner">
                                                        <Typography variant="body2" className="tag" data-aos="fade-down">
                                                            {doc.tag}
                                                        </Typography>
                                                        <div className="info-date-view" data-aos="fade-up">
                                                            <div className="list">
                                                                <span className="icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.632" height="16" viewBox="0 0 15.632 16">
                                                                        <path data-name="Path 451909" d="M7.867,12.257a.473.473,0,0,0,.668,0l1.687-1.687A.472.472,0,0,0,9.554,9.9L8.2,11.255l-.617-.617a.472.472,0,0,0-.668.668Zm0,0" transform="translate(-0.753 -1.085)" fill="#121d77"/>
                                                                        <path data-name="Path 451910" d="M8.325,14.526a3.75,3.75,0,1,0-3.75-3.75A3.755,3.755,0,0,0,8.325,14.526Zm0-6.556a2.806,2.806,0,1,1-2.806,2.806A2.809,2.809,0,0,1,8.325,7.97Zm0,0" transform="translate(-0.508 -0.781)" fill="#121d77"/>
                                                                        <path data-name="Path 451911" d="M14.1,1.006h-.862V.472a.472.472,0,1,0-.945,0v.534H11.37V.472a.472.472,0,0,0-.945,0v.534H5.208V.472a.472.472,0,0,0-.945,0v.534H3.335V.472a.472.472,0,0,0-.945,0v.534H1.528A1.53,1.53,0,0,0,0,2.534V14.472A1.53,1.53,0,0,0,1.528,16H14.1a1.53,1.53,0,0,0,1.528-1.528V2.534A1.53,1.53,0,0,0,14.1,1.006Zm.583,13.466a.584.584,0,0,1-.583.583H1.528a.584.584,0,0,1-.583-.583V4.934H14.687ZM.945,2.534a.584.584,0,0,1,.583-.583H2.39v.534a.472.472,0,0,0,.945,0V1.951h.928v.534a.472.472,0,0,0,.945,0V1.951h5.217v.534a.472.472,0,0,0,.945,0V1.951H12.3v.534a.472.472,0,0,0,.945,0V1.951H14.1a.584.584,0,0,1,.583.583V3.989H.945Zm0,0" transform="translate(0 0)" fill="#121d77"/>
                                                                    </svg>
                                                                </span>
                                                                <small className="txt">{doc.date}</small>
                                                            </div>
                                                            <div className="list">
                                                                <span className="icon">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10.979" viewBox="0 0 16 10.979">
                                                                        <g transform="translate(0 -2.51)">
                                                                            <path data-name="Path 451912" d="M15.92,7.739a16.2,16.2,0,0,0-2.277-2.594,11.8,11.8,0,0,0-2.494-1.8A6.8,6.8,0,0,0,8,2.51a6.8,6.8,0,0,0-3.149.838,11.8,11.8,0,0,0-2.494,1.8A16.2,16.2,0,0,0,.08,7.739a.469.469,0,0,0,0,.523,16.208,16.208,0,0,0,2.277,2.594,11.8,11.8,0,0,0,2.494,1.8A6.8,6.8,0,0,0,8,13.49a6.8,6.8,0,0,0,3.149-.838,11.8,11.8,0,0,0,2.494-1.8A16.2,16.2,0,0,0,15.92,8.261a.469.469,0,0,0,0-.523Zm-2.927,2.44A7.919,7.919,0,0,1,8,12.552a7.919,7.919,0,0,1-4.993-2.373A16.05,16.05,0,0,1,1.046,8C1.791,7,4.665,3.448,8,3.448a7.919,7.919,0,0,1,4.993,2.373A16.049,16.049,0,0,1,14.955,8a16.048,16.048,0,0,1-1.962,2.179Z" fill="#121d77"/>
                                                                            <path data-name="Path 451913" d="M8,4.519A3.481,3.481,0,1,0,11.481,8,3.485,3.485,0,0,0,8,4.519Zm0,6.025A2.544,2.544,0,1,1,10.544,8,2.547,2.547,0,0,1,8,10.544Z" fill="#121d77"/>
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                                <small className="txt">{doc.view}</small>
                                                            </div>
                                                        </div>
                                                        <Typography variant="h3" className="h4 title text-limit" data-aos="fade-up">
                                                            <strong>{doc.title}</strong>
                                                        </Typography>
                                                        {/* <Typography variant="caption" className="desc text-limit">
                                                            {doc.desc}
                                                        </Typography> */}
                                                    </div>
                                                    <Box className="action" data-aos="fade-left">
                                                        <div className="btn btn-primary btn-lg outline">
                                                            อ่านเพิ่มเติม
                                                            <span className="icon" aria-hidden="true">
                                                                <span className="feather icon-arrow-right"></span>
                                                            </span>
                                                        </div>
                                                    </Box>
                                                </Box>
                                            </Link>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </TabPanel>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
export default DocumentsSection