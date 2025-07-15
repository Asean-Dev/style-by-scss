// icon
import EastIcon from '@mui/icons-material/East';

// components
import BreadcrumbsIconHome from "@/components/ui/breadcrumbs-icon-home";

// types
import {detailSCHeader} from "@/types/detail";

const title = 'คู่มือการใช้งานระบบงานคดีปกครองอิเล็กทรอนิกส์';
const tag = 'มุมความรู้สำหรับประชาชน';
const breadcrumbsHome = 'หน้าหลัก';
const breadcrumbs2 = 'บริการประชาชน';

export const ServiceManualSCHeadDetail: detailSCHeader = {
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
            linkUrl: '/service',
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
            linkUrl: '/service/knowledge-corner',
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
            linkUrl: '/service/manual',
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