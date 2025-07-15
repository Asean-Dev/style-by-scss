import EastIcon from '@mui/icons-material/East';

// components
import BreadcrumbsIconHome from "@/components/ui/breadcrumbs-icon-home";

// types
import {listSCHeader} from "@/types/list";

const title = 'ระบบรับฟังความคิดเห็น';
const breadcrumbsHome = 'หน้าหลัก';

export const FeedbackSCHeadList: listSCHeader = {
    id: 1,
    title: title,
    image: '/img/upload/hero/hero-feedback-list.jpg',
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
            linkUrl: '/feedback',
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