// icon
import EastIcon from '@mui/icons-material/East';

// components
import BreadcrumbsIconHome from "@/components/ui/breadcrumbs-icon-home";

// types
import {detailSCHeader} from "@/types/detail";

const title = 'ลงนามถวายพระพรชัยมงคล สมเด็จพระนางเจ้า ฯ พระบรมราชินี เนื่องในโอกาสวันเฉลิมพระชนมพรรษา';
const tag = 'ลงนามถวายพระพร';
const breadcrumbsHome = 'หน้าหลัก';

export const BlessSCHeadDetail: detailSCHeader = {
    id: 1,
    tag: tag,
    blessTitle: title,
    image: '/img/upload/hero/hero-detail.jpg',
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
            id: 4,
            status: 'active',
            linkUrl: '/public-relations/detail',
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