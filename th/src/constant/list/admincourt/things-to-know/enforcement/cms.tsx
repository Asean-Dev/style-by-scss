import Image from 'next/image';

// types
import {detailCMS} from "@/types/detail";

// libs
import {imageLoader} from "@/libs/imageLoader";

export const AdmincourtThingsToKnowEnforcementDetailCMS: detailCMS = {
    id: 1,
    text: 
    <>
        <Image
            loader={imageLoader}
            src="/img/upload/enforcement/enforcement01.jpg"
            alt="การให้คำปรึกษาแนะนำ"
            width={1290}
            height={912}
        />
        <Image
            loader={imageLoader}
            src="/img/upload/enforcement/enforcement02.jpg"
            alt="การยึดทรัพย์สิน"
            width={1290}
            height={912}
        />
        <Image
            loader={imageLoader}
            src="/img/upload/enforcement/enforcement03.jpg"
            alt="การอายัดทรัพย์สิน"
            width={1290}
            height={912}
        />
        <Image
            loader={imageLoader}
            src="/img/upload/enforcement/enforcement04.jpg"
            alt="ขายทอดตลาดทรัพย์สิน"
            width={1290}
            height={912}
        />
        <Image
            loader={imageLoader}
            src="/img/upload/enforcement/enforcement05.jpg"
            alt="การวางเงินตามคำพิพากษา"
            width={1290}
            height={912}
        />
    </>,
};