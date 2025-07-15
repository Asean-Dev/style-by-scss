import EastIcon from '@mui/icons-material/East';

// components
import BreadcrumbsIconHome from "@/components/ui/breadcrumbs-icon-home";

// types
import {overviewSCHeader} from "@/types/overview";

const title = 'บริการเจ้าหน้าที่';
const breadcrumbsHome = 'หน้าหลัก';

export const staffServicesSCHeadOverview: overviewSCHeader = {
    id: 1,
    title: title,
    desc: 'ข้อมูลเกี่ยวกับบริการเจ้าหน้าที่',
    image: '/img/upload/hero/hero-office.jpg',
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
            status: 'active',
            linkUrl: '/service',
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