// types
import {layoutNav} from "@/types/nav";

export const AdmincourtNavList: layoutNav[] = [
    { id: 1, title: 'พระราชดำรัส', linkUrl: '/admincourt/list', pathSegment: '/admincourt/list',},
    { id: 2, title: 'ประวัติความเป็นมา', linkUrl: '#', pathSegment: '',},
    { id: 3, title: 'ตราสัญลักษณ์', linkUrl: '#', pathSegment: '',},
    { id: 4, title: 'วิสัยทัศน์และพันธกิจ', linkUrl: '#', pathSegment: '',},
    { id: 5, title: 'แผนแม่บทศาลปกครอง', linkUrl: '#', pathSegment: '',},
    { id: 6, title: 'เขตอำนาจของศาลปกครอง', linkUrl: '#', pathSegment: '',},
    { id: 7, title: 'ผู้บริหารศาลปกครอง', linkUrl: '#', pathSegment: '',},
    { id: 8, title: 'นโยบายประธานศาลปกครองสูงสุด', linkUrl: '#', pathSegment: '',},
    { id: 9, title: 'ศาลปกครองในภูมิภาค', linkUrl: '/admincourt/regions/grid', pathSegment: 'admincourt/regions',},
    { id: 10, title: 'ข้อควรรู้เกี่ยวกับการฟ้องคดีปกครอง', linkUrl: '/admincourt/things-to-know', pathSegment: 'admincourt/things-to-know',},
    { id: 11, title: 'สถิติคดีปกครอง', linkUrl: '/admincourt/statistics', pathSegment: 'admincourt/statistics',},
]; 