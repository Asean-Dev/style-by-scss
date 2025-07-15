import EastIcon from '@mui/icons-material/East';

// components
import BreadcrumbsIconHome from "@/components/ui/breadcrumbs-icon-home";

// types
import {overviewSCHeader} from "@/types/overview";

const title = 'วิชาการ';
const breadcrumbsHome = 'หน้าหลัก';

export const AcademiSCHeadOverview: overviewSCHeader = {
    id: 1,
    title: title,
    desc: 'วิชาการเกี่ยวกับกฎหมายปกครองและคดีปกครอง เผยแพร่องค์ความรู้และความเข้าใจเกี่ยวกับกฎหมายปกครอง',
    image: '/img/upload/hero/hero-academic.jpg',
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
            linkUrl: '/academic',
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