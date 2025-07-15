import EastIcon from '@mui/icons-material/East';

// components
import BreadcrumbsIconHome from "@/components/ui/breadcrumbs-icon-home";

// types
import {listSCHeader} from "@/types/list";

const title = 'พื้นที่แห่งการเรียนรู้เพื่อประชาชนของศาลปกครอง';
const breadcrumbsHome = 'หน้าหลัก';
const breadcrumbs2 = 'บริการประชาชน';

export const ServiceLearningAreaSCHeadList: listSCHeader = {
    id: 1,
    title: title,
    image: '/img/upload/hero/hero-service-list.jpg',
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
            linkUrl: '/service/learning-area',
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