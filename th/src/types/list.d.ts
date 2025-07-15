interface breadcrumbs {
    id: number;
    status: string;
    linkUrl: string;
    title: string;
    itemList: React.ReactNode;
}
export type listSCHeader = {
    id: number;
    title: string;
    image: string;
    search?: string;
    breadcrumbs: breadcrumbs[];
}

export type ListHilight = {
    id: number;
    linkUrl: string;
    imageUrl: string;
    date?: string;
    lang?: string;
    title: string;
    desc?: string;
    translated?: string;
    reference?: string;
    positions?: string;
    number?: string;
    subbtnLinkUrl?: string;
    subbtnTitle?: string;
    subbtnTitleText?: React.ReactNode;
}

export type ListFilterTags = {
    id: number;
    status?: string;
    linkUrl: string;
    title: string;
    pathSegment?:string;
}

export type LayoutListItem = {
    id: number;
    linkUrl: string;
    image?: string;
    iconType?: string;
    date: string;
    title: string;
    positions?: string;
    number?: string;
    btnUrl?: string;
    btn?: string;
}

interface orderlist {
    id: number;
    linkUrl: string;
    image: string;
    imageType: string;
    date: string;
    title: string;
}
export type LayoutListItemGroup = {
    id: number;
    linkUrl: string;
    title: string;
    orderlist: orderlist[];
}

export type LayoutListItemBook = {
    id: number;
    linkUrl: string;
    linkDownload: string;
    image: string;
    title: string;
    desc: string;
    date: string;
}

export type LayoutListDownload = {
    id: number;
    linkUrl?: string;
    btnUrl?: string;
    iconType?: string;
    title: string;
    page: string;
    size: string;
    read: string;
    btn: string;
}

interface iconlist {
    id: number;
    iconType?: string;
}
export type LayoutListDownloadThumb = {
    id: number;
    linkUrl: string;
    image?: string;
    iconlist?: iconlist[];
    title: string;
    desc?: string;
    date: string;
    case?: string;
    tag?: string;
    page: string;
    size: string;
    read: string;
    btnUrl: string;
}

export type LayoutListDownloadThumb2 = {
    id: number;
    linkUrl: string;
    image: string;
    lang: string;
    title: string;
    desc: string;
    translated: string;
    reference: string;
    btnUrl: string;
}

interface tablelist {
    id: number;
    title: string;
    desc: string;
}
export type LayoutListDownloadTable = {
    id: number;
    hTitle: string;
    hNumber: string;
    linkUrl: string;
    btnUrl: string;
    boxList: tablelist[];
}
interface infolist {
    id: number;
    title: string;
    desc: string;
}
export type LayoutListDownloadSearch = {
    id: number;
    hTitle: string;
    hDesc?: string;
    hNumber?: string;
    linkUrl?: string;
    btnUrl?: string;
    page?: string;
    size?: string;
    read?: string;
    tagDate?: string;
    tagInfo?: string;
    tagBlack?: string;
    tagRed?: string;
    infoList?: infolist[];
    boxList?: tablelist[];
}

interface orderGrouplist {
    id: number;
    position: string;
    listed: string;
    age: string;
    expired: string;
    order: string;
}
export type LayoutListItemGroupList = {
    id: number;
    title: string;
    orderlist: orderGrouplist[];
}

interface orderNavMenu {
    id: number;
    status: string;
    linkUrl: string;
    title: string;
}
export type LayoutListItemNav = {
    id: number;
    sub: string;
    title: string;
    ordermenu: orderNavMenu[];
}
export type LayoutListItemGroupNumber = {
    id: number;
    numtxt: string;
    iconType: string;
    title: string;
    book: string;
    episode: string;
    date: string;
    linkUrl: string;
    btnUrl: string;
}

export type LayoutListCategory = {
    id: number;
    txt: string;
    linkUrl: string;
}

interface LayoutItemSlide {
    id: number;
    linkUrl: string;
    image: string;
    date: string;
    title: string;
}
export type LayoutListItemSlide = {
    id: number;
    hTitle: string;
    itemSlide: LayoutItemSlide[];
}

export type ListFilterLayoutType = {
    id: number;
    linkUrl: string;
    pathSegment:string;
    title: string;
}
export type LayoutListItemsGrid = {
    id: number;
    linkUrl: string;
    image: string;
    title: string;
}
export type LayoutListItemsList = {
    id: number;
    linkUrl: string;
    btnUrl: string;
    image: string;
    title: string;
    desc: string;
    phone: string;
    fax: string;
}
export type LayoutListAccordion = {
    id: number;
    status: string;
    title: string;
    file?: string;
    desc?: React.ReactNode;
    download?: LayoutListDownloadThumb[];
}
export type LayoutListAccordionGroup = {
    id: number;
    title: string;
    accordion: LayoutListAccordion[];
}

interface LayoutItemSitemap {
    id: number;
    linkUrl: string;
    title: string;
}
export type LayoutSitemap = {
    id: number;
    box: string;
    hTitle: string;
    itemSitemap: LayoutItemSitemap[];
}

export type LayoutListItemsQRCode = {
    id: number;
    linkUrl: string;
    image: string;
    title: string;
}