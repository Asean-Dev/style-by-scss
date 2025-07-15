// types
import {ListHilight} from "@/types/list";

const btnTitle = 'ดาวน์โหลดเอกสาร';

export const PublicRelationManualHilight: ListHilight[] = [
    {
        id: 1,
        linkUrl: '/public-relations/viewpdf',
        imageUrl: '/img/upload/list/manual.jpg',
        date: '10.02.2025',
        title: 'คู่มือการใช้งานระบบยื่นฟ้องคดีปกครองทางอิเล็กทรอนิกส์ (e-Filing)',
        desc: 'คู่มือการติดตามความคืบหน้าคดีปกครอง',
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