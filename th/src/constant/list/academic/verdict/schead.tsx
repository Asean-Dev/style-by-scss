import EastIcon from '@mui/icons-material/East';

// components
import BreadcrumbsIconHome from "@/components/ui/breadcrumbs-icon-home";

// types
import {listSCHeader} from "@/types/list";

const title = 'คำแปลคำวินิจฉัยของศาลปกครองไทย';
const breadcrumbsHome = 'หน้าหลัก';
const breadcrumbs2 = 'วิชาการ';

export const AcademicVerdictSCHeadList: listSCHeader = {
    id: 1,
    title: title,
    image: '/img/upload/hero/hero-academic-list.jpg',
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
            linkUrl: '/academic',
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
            linkUrl: '/academic/verdict',
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