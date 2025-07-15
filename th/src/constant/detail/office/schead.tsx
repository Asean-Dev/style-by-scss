// icon
import EastIcon from '@mui/icons-material/East';

// components
import BreadcrumbsIconHome from "@/components/ui/breadcrumbs-icon-home";

// types
import {detailSCHeader} from "@/types/detail";

const title = 'ประกาศสำนักงานศาลปกครอง เรื่อง ประกาศผู้ชนะการเสนอราคา ประกวดราคาซื้อเครื่องคอมพิวเตอร์แม่ข่ายและ ระบบเครือข่ายเพื่อเพิ่มประสิทธิภาพบริการระบบงานคดีปกครองอิเล็กทรอนิกส์ (e-Admincourt) สำหรับประชาชน ด้วยวิธีประกวดราคาอิเล็กทรอนิกส์ (e-bidding)';
const tag = 'ผลการสำรวจความเชื่อมั่นของประชาชนต่อศาลปกครอง';
const breadcrumbsHome = 'หน้าหลัก';
const breadcrumbs2 = 'สำนักงานศาลปกครอง';

export const OfficeSCHeadDetail: detailSCHeader = {
    id: 1,
    tag: tag,
    title: title,
    date: '10.02.2025',
    image: '/img/upload/hero/hero-detail.jpg',
    breadcrumbs: [
        {
            id: 1,
            status: 'home',
            linkUrl: '/home',
            title: breadcrumbsHome,
            itemList:
            <>
                <BreadcrumbsIconHome />
                <strong className="txt">{breadcrumbsHome}</strong>
            </>,
        },
        {
            id: 2,
            status: '',
            linkUrl: '/public-relations',
            title: breadcrumbs2,
            itemList:
            <>
                <span className="icon">
                    <EastIcon/>
                </span>
                <strong className="txt">{breadcrumbs2}</strong>
            </>,
        },
        {
            id: 3,
            status: '',
            linkUrl: '/public-relations/list',
            title: tag,
            itemList:
            <>
                <span className="icon">
                    <EastIcon/>
                </span>
                <strong className="txt">{tag}</strong>
            </>,
        },
        {
            id: 4,
            status: 'active',
            linkUrl: '/public-relations/detail',
            title: title,
            itemList:
            <>
                <span className="icon">
                    <EastIcon/>
                </span>
                <strong className="txt">{title}</strong>
            </>,
        },
    ],
};