// types
import {detailInformation} from "@/types/detail";

export const SearchInformationDetailAppointment: detailInformation = {
    id: 1,
    titleColor: 'นัดครั้งที่ 1 นั่งพิจารณาคดี',
    appointmentList: [
        {
            id: 1,
            title: 'วันที่นัด',
            date: '27 มีนาคม 2568',
        },
        {
            id: 2,
            title: 'เวลานัด',
            desc: '09:30น.- 12:00 น.',
        },
        {
            id: 3,
            title: 'สถานที่',
            desc: 'ห้องพิจารณาคดี พิจารณาคดี 4 (ชั้น3)',
        },
        {
            id: 4,
            title: 'หมายเหตุ',
            desc: 'นั่งพิจารณาคดี',
        },
    ],
};