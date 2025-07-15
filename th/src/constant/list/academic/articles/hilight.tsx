// types
import {ListHilight} from "@/types/list";

const btnTitle = 'ดาวน์โหลดเอกสาร';

export const AcademicArticlesCaseHilight: ListHilight[] = [
    {
        id: 1,
        linkUrl: '/academic/viewpdf',
        imageUrl: '/img/upload/book.jpg',
        date: '10.02.2025',
        title: 'รวมบทความทางวิชาการ เล่ม 2 : ศาลปกครองกับสิ่งแวดล้อม',
        desc: 'รวมบทความทางวิชาการ เล่ม 3 ประกอบด้วย บทความทางวิชาการ การบรรยายทางวิชาการ และบทวิเคราะห์คดีและคำวินิจฉัยที่สำคัญ',
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