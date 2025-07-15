import EastIcon from '@mui/icons-material/East';

// components
import BreadcrumbsIconHome from "@/components/ui/breadcrumbs-icon-home";

// types
import {overviewSCHeader} from "@/types/overview";

const title = 'สืบค้นข้อมูล';
const breadcrumbsHome = 'หน้าหลัก';

export const SearchInformationSCHeadOverview: overviewSCHeader = {
    id: 1,
    title: title,
    desc: 'ระบบสืบค้นข้อมูลต่างๆ ของศาลปกครอง',
    image: '/img/upload/hero/hero-searchInformation.jpg',
    search: 'show',
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
            linkUrl: '/search-information',
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