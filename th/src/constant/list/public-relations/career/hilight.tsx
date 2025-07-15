// types
import {ListHilight} from "@/types/list";

// icon
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const btnTitle = 'สมัครออนไลน์';

export const PublicRelationCareerHilight: ListHilight[] = [
    {
        id: 1,
        linkUrl: '#',
        imageUrl: '/img/upload/list/career.jpg',
        date: '10.02.2025',
        title: 'ประกาศสำนักงานศาลปกครองนครราชสีมา เรื่องการขึ้นบัญชีผู้ผ่านการเลือกสรรเป็นพนักงานราชการศาลปกครองทั่วไป',
        positions: 'นายช่างคอมพิวเตอร์',
        number: '1',
        subbtnLinkUrl: '#',
        subbtnTitle: btnTitle,
        subbtnTitleText:
        <>
            <span className="icon">
                <WorkOutlineIcon/>
            </span>
            <strong className="txt">{btnTitle}</strong>
        </>,
    },
]; 