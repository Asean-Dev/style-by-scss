import EastIcon from '@mui/icons-material/East';

// components
import BreadcrumbsIconHome from "@/components/ui/breadcrumbs-icon-home";

// types
import {overviewSCHeader} from "@/types/overview";

const title = 'สำนักงานศาลปกครอง';
const breadcrumbsHome = 'หน้าหลัก';

export const OfficeSCHeadOverview: overviewSCHeader = {
    id: 1,
    title: title,
    desc: 'ข้อมูลเกี่ยวกับสำนักงานศาลปกครองและภารกิจสนับสนุน',
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
            linkUrl: '/office',
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