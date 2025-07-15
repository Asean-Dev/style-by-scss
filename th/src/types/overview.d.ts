interface breadcrumbs {
    id: number;
    status: string;
    linkUrl: string;
    title: string;
    itemList: React.ReactNode;
}
export type overviewSCHeader = {
    id: number;
    title: string;
    desc: string;
    image: string;
    search?: string;
    breadcrumbs: breadcrumbs[];
}

export type LayoutOverviewItem = {
    id: number;
    layout: string;
    linkUrl: string;
    image: string;
    title: string;
    desc?: string;
}