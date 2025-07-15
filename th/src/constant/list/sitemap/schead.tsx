import EastIcon from '@mui/icons-material/East';

// components
import BreadcrumbsIconHome from "@/components/ui/breadcrumbs-icon-home";

// types
import {listSCHeader} from "@/types/list";

const title = 'แผนผังเว็บไซต์';
const breadcrumbsHome = 'หน้าหลัก';

export const SitemapSCHeadList: listSCHeader = {
    id: 1,
    title: title,
    image: '/img/upload/hero/hero-publicRelations-list.jpg',
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
            linkUrl: '/sitemap',
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