// types
import {ListHilight} from "@/types/list";

const btnTitle = 'ดาวน์โหลดเอกสาร';

export const PublicRelationCaseHilight: ListHilight[] = [
    {
        id: 1,
        linkUrl: '/public-relations/detail',
        imageUrl: '/img/upload/list/case.jpg',
        date: '10.02.2025',
        title: 'กำหนดนัดพิจารณาคดีที่น่าสนใจของศาลปกครอง ระหว่างวันที่ 13 - 16 พฤษภาคม 2568',
        desc: 'สรุปผลการดำเนินการจัดซื้อจัดจ้าง',
        subbtnLinkUrl: '#',
        subbtnTitle: btnTitle,
        subbtnTitleText:
        <>
            <span className="icon">
                <span className="feather icon-download"></span>
            </span>
            <strong className="txt">{btnTitle}</strong>
        </>,
    },
]; 