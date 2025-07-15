import EastIcon from '@mui/icons-material/East';

// components
import BreadcrumbsIconHome from "@/components/ui/breadcrumbs-icon-home";

// types
import {overviewSCHeader} from "@/types/overview";

const title = 'การเรียนรู้ผ่านระบบออนไลน์';
const breadcrumbsHome = 'หน้าหลัก';

export const ServiceOnlineLearningSCHeadOverview: overviewSCHeader = {
    id: 1,
    title: title,
    desc: 'ระบบการเรียนรู้อิเล็กทรอนิกส์ศาลปกครอง',
    image: '/img/upload/hero/hero-service.jpg',
    search: '',
    breadcrumbs: [
        {
            id: 1,
            status: 'home',
            linkUrl: '/home',
            title: breadcrumbsHome,
            itemList:
            <>
                <BreadcrumbsIconHome/>
                <strong className="txt">{breadcrumbsHome}</strong>
            </>,
        },
        {
            id: 2,
            status: '',
            linkUrl: '/service',
            title: title,
            itemList:
            <>
                <span className="icon">
                    <EastIcon/>
                </span>
                <strong className="txt">บริการประชาชน</strong>
            </>,
        },
        {
            id: 3,
            status: 'active',
            linkUrl: '/service/online-learning',
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