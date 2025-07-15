interface breadcrumbs {
    id: number;
    status: string;
    linkUrl: string;
    title: string;
    itemList: React.ReactNode;
}
export type detailSCHeader = {
    id: number;
    tag: string;
    blessTitle?: string;
    title?: string;
    date?: string;
    image: string;
    breadcrumbs: breadcrumbs[];
}

export type detailCMS = {
    id: number;
    text?: React.ReactNode;
}

export type detailInfo = {
    id: number;
    date: string;
}

export type detailHeadInfo = {
    id: number;
    title: string;
    date: string;
}

export type detailPDF = {
    id: number;
    file: string;
    note?: React.ReactNode;
}

export type detailDownload = {
    id: number;
    column?: string;
    iconType: string;
    title: string;
    page: string;
    size: string;
    read: string;
    linkUrl: string;
}

interface dataList {
    id: number;
    title: string;
    desc: string;
}
interface appointmentList {
    id: number;
    title: string;
    date?: string;
    desc?: string;
}
export type detailInformation = {
    id: number;
    title?: string;
    titleColor?: string;
    tagBlack?: string;
    tagRed?: string;
    dataList?: dataList[];
    appointmentList?: appointmentList[];
}

export type detailImageCover = {
    id: number;
    url: string;
    alt: string;
}