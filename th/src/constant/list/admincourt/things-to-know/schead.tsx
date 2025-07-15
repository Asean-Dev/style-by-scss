import EastIcon from '@mui/icons-material/East';

// components
import BreadcrumbsIconHome from "@/components/ui/breadcrumbs-icon-home";

// types
import {listSCHeader} from "@/types/list";

const title = 'ข้อควรรู้เกี่ยวกับการฟ้องคดีปกครอง';
const breadcrumbsHome = 'หน้าหลัก';
const breadcrumbs2 = 'ศาลปกครอง';

export const AdmincourtThingsToKnowSCHeadList: listSCHeader = {
    id: 1,
    title: title,
    image: '/img/upload/hero/hero-admincourt-list.jpg',
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
            linkUrl: '/admincourt',
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
            status: 'active',
            linkUrl: '/admincourt/things-to-know',
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