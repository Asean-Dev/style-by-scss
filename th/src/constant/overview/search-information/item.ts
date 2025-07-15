// types
import {LayoutOverviewItem} from "@/types/overview";

export const SearchInformationOverviewItem: LayoutOverviewItem[] = [
    { 
        id: 1, 
        layout: 'box-2',
        linkUrl: '/search-information/statements',
        image: '/img/upload/overview/searchInformation01.jpg', 
        title: 'คำพิพากษา / คำสั่ง / แถลงการณ์', 
    },
    { 
        id: 2, 
        layout: '',
        linkUrl: '/search-information/appointment',
        image: '/img/upload/overview/searchInformation02.jpg', 
        title: 'บัญชีนัดศาลปกครอง', 
    },
    { 
        id: 3, 
        layout: '',
        linkUrl: '/search-information/litigation',
        image: '/img/upload/overview/searchInformation03.jpg', 
        title: 'สืบค้นบัญชีการฟ้องคดี', 
    },
    { 
        id: 4,
        layout: 'box-2',
        linkUrl: '/search-information/case-type',
        image: '/img/upload/overview/searchInformation04.jpg', 
        title: 'คำพิพากษาคำสั่งศาลปกครองสูงสุดจำแนกตามประเภทคดี', 
    },
    { 
        id: 5,
        layout: 'box-2',
        linkUrl: '/search-information/academic',
        image: '/img/upload/overview/searchInformation05.jpg', 
        title: 'สืบค้นข้อมูลวิชาการ', 
    },
];