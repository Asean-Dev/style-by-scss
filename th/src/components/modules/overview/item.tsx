"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import Typography from "@mui/material/Typography";

import EastIcon from "@mui/icons-material/East";

// libs
import { imageLoader } from "@/libs/imageLoader";

// types
import { LayoutOverviewItem } from "@/types/overview";

type Props = {
  OverviewItem: LayoutOverviewItem[];
  // OverviewItem2?: LayoutOverviewItem[], // ? คือ มีไม่มีก็ได้
};
export default function ScOverviewList({ OverviewItem }: Props) {
  return (
    <div className="sc-overview-list">
      <ul className="item-list">
        {OverviewItem?.map((item) => (
          <li key={item.id} className={`${item.layout}`}>
            <Link href={item.linkUrl} className="link" title={item.title}>
              <div className="thumb">
                <figure className="ratio">
                  <Image
                    className="cover-img"
                    loader={imageLoader}
                    src={item.image}
                    alt={item.title}
                    width={804}
                    height={804}
                  />
                </figure>
              </div>
              <div className="content">
                <Typography variant="h3" className="h4 txt">
                  {item.title}
                </Typography>
                <Typography variant="h4" className="h5 desc">
                  {item.desc}
                </Typography>
                <span className="icon">
                  <EastIcon />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
