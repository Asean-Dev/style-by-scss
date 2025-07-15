// types
import {ListHilight} from "@/types/list";

const btnTitle = 'ดาวน์โหลดเอกสาร';

export const AcademicVerdictHilight: ListHilight[] = [
    {
        id: 1,
        linkUrl: '/academic/viewpdf',
        imageUrl: '/img/upload/list/verdict.jpg',
        lang: 'ประเทศฝรั่งเศส',
        title: "คำพิพากษาสภาแห่งรัฐฝรั่งเศส (Conseil d'État) คดีเกี่ยวกับการใช้อำนาจดุลพินิจ",
        translated: 'กองวิชาการและวิจัย สำนักงานศาลปกครอง',
        reference: 'คดีหมายเลข 408463 ลงวันที่ 21 มีนาคม 2544',
        desc: 'คำแปลคำพิพากษาสภาแห่งรัฐฝรั่งเศสเกี่ยวกับหลักการตรวจสอบการใช้อำนาจดุลพินิจของฝ่ายปกครองและขอบเขตการควบคุมตรวจสอบโดยศาล',
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