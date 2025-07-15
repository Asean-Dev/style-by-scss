// icon
import EastIcon from '@mui/icons-material/East';

// components
import BreadcrumbsIconHome from "@/components/ui/breadcrumbs-icon-home";

// types
import {detailSCHeader} from "@/types/detail";

const title = 'การสัมมนาเพื่อประเมินผลการดำเนินงานในภาพรวมของศาลปกครอง ประจำปีงบประมาณ พ.ศ. 2568 หัวข้อ การดำเนินกระบวนพิจารณาคดีด้วยวิธีการทางอิเล็กทรอนิกส์ : ปัญหา อุปสรรค และแนวทางแก้ไข';
const tag = 'ข่าวประชาสัมพันธ์';
const breadcrumbsHome = 'หน้าหลัก';
const breadcrumbs2 = 'ประชาสัมพันธ์';

export const PublicRelationsSCHeadDetail: detailSCHeader = {
    id: 1,
    tag: tag,
    title: title,
    date: '10.02.2025',
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
            id: 2,
            status: '',
            linkUrl: '/public-relations',
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
            status: '',
            linkUrl: '/public-relations/list',
            title: tag,
            itemList:
            <>
                <span className="icon">
                    <EastIcon/>
                </span>
                <strong className="txt">{tag}</strong>
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