"use client";

import React from 'react';

import Typography from '@mui/material/Typography';

// scss
import "@/assets/scss/components/_button.scss";

// types
import {LayoutListItemGroupList} from "@/types/list";

type Props = {
    ListItemGroupList: LayoutListItemGroupList[],
}

export default function LayoutItemGroup({ ListItemGroupList }: Props) {
    return (
        <>
            <div className="layout-item-grouplist">
                <ul className="order-list">
                    {ListItemGroupList.map((item) => (
                        <li key={item.id}>
                            <div className="layout-action text">
                                <div className="inner">
                                    <Typography variant="h2" className="h4 title">
                                        <strong>{item.title}</strong>
                                    </Typography>
                                </div>
                            </div>
                            <ul className="item-list">
                                {item.orderlist.map((itemList) => (
                                    <li key={itemList.id} data-aos="fade-up">
                                        <div className="wrapper">
                                            <div className="col">
                                                <strong className="txt">ตำแหน่ง</strong>
                                                <Typography variant="h3" className="desc">
                                                    {itemList.position}
                                                </Typography>
                                            </div>
                                            <div className="col-auto">
                                                <strong className="txt">ขึ้นบัญชี</strong>
                                                <Typography variant="h3" className="desc">
                                                    {itemList.listed}
                                                </Typography>
                                            </div>
                                            <div className="col-auto">
                                                <strong className="txt">อายุบัญชี</strong>
                                                <Typography variant="h3" className="desc">
                                                    {itemList.age} ปี
                                                </Typography>
                                            </div>
                                            <div className="col-auto">
                                                <strong className="txt">บัญชีหมดอายุ</strong>
                                                <Typography variant="h3" className="desc">
                                                    {itemList.expired}
                                                </Typography>
                                            </div>
                                            <div className="col-auto">
                                                <strong className="txt">เรียกบรรจุถึงลำดับ</strong>
                                                <Typography variant="h3" className="desc">
                                                    {itemList.order}
                                                </Typography>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
