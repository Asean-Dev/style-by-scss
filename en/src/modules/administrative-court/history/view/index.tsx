"use client";

import { Box, Typography } from "@mui/material";
import { HeaderAdministrativeCourt } from "../../header";
import { HistorySlide } from "../history-slide";

export const HistoryView = () => {
  return (
    <HeaderAdministrativeCourt
      mainModule="History"
      title={
        <Typography variant="h6" fontSize={40} color="white">
          History
        </Typography>
      }
    >
      <HistorySlide />
    </HeaderAdministrativeCourt>
  );
};
