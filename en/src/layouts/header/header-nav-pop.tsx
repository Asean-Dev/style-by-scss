import { ContainerCore } from "@/components/core/container";
import { Box, Typography, Stack, Link, Card, alpha } from "@mui/material";
import { ConfigNavBar } from "../config-nav-bar";
import Image from "next/image";
import { FadeIn } from "@/components/core/fade-in";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeaderNavPop({
  id,
  setGetId,
}: {
  id: { id: number; isOpen: boolean };
  setGetId: (id: { id: number; isOpen: boolean }) => void;
}) {
  const sunMenu = ConfigNavBar.find((item) => item.id === id.id)?.subMenu;
  const image = ConfigNavBar.find((item) => item.id === id.id)?.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: id.isOpen && id.id !== 1 ? 1 : 0,
        y: id.isOpen && id.id !== 1 ? 0 : 100,
        display: id.isOpen && id.id !== 1 ? "block" : "none",
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <Box
        sx={{
          position: "fixed",
          minHeight: "407px",
          width: "100%",
          backgroundColor: (theme) => theme.palette.primary.main,
          transition: "all 0.4s ease",
        }}
      >
        <ContainerCore sx={{ height: "100%", p: "40px 60px" }}>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" py={"20px"}>
              <Stack direction="column" spacing={1.5} minWidth={"393px"}>
                {sunMenu?.one.map((item) => (
                  <Stack
                    direction="row"
                    spacing={1.5}
                    key={item.title}
                    component={Link}
                    href={item.linkUrl}
                    flexDirection="row"
                    alignItems="center"
                    onClick={() => setGetId({ id: id.id, isOpen: false })}
                    sx={{
                      color: "text.light",
                      fontSize: 16,
                      fontWeight: 500,
                      textDecoration: "none",
                      cursor: "pointer",
                      "&:hover": {
                        opacity: 0.8,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 3,
                        height: 3,
                        backgroundColor: "text.light",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        color: "text.light",
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
              {sunMenu?.tow && (
                <Stack direction="column" spacing={1.5} width={"393px"}>
                  {sunMenu?.tow.map((item) => (
                    <Stack
                      direction="row"
                      spacing={1.5}
                      key={item.title}
                      component={Link}
                      href={item.linkUrl}
                      flexDirection="row"
                      alignItems="center"
                      onClick={() => setGetId({ id: id.id, isOpen: false })}
                      sx={{
                        color: "text.light",
                        fontSize: 16,
                        fontWeight: 500,
                        textDecoration: "none",
                        cursor: "pointer",
                        "&:hover": {
                          opacity: 0.8,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 3,
                          height: 3,
                          backgroundColor: "text.light",
                          borderRadius: "50%",
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        sx={{
                          color: "text.light",
                          fontSize: 16,
                          fontWeight: 500,
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              )}
            </Stack>
            <Card
              sx={{
                width: "384px",
                height: "327px",
                p: "8px",
                borderRadius: "20px",
                backgroundColor: (theme) =>
                  alpha(theme.palette.text.light, 0.3),
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              {id.id !== 1 && (
                <Image
                  src={image || ""}
                  alt="logo"
                  width={368}
                  height={229}
                  style={{
                    width: "auto",
                    height: "229px",
                    objectFit: "cover",
                    borderRadius: "16px",
                  }}
                />
              )}
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mt={"8px"}
                height="100%"
                width="354px"
              >
                {HeaderNavPopTitle(id.id)}
                <IconArrow linkUrl="#" />
              </Stack>
            </Card>
          </Stack>
        </ContainerCore>
      </Box>
    </motion.div>
  );
}

function IconArrow({ linkUrl }: { linkUrl: string }) {
  return (
    <Box
      sx={{
        width: "48px",
        height: "48px",
        backgroundColor: "text.yellow",
        borderRadius: "50%",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      component={Link}
      href={linkUrl}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 13L13 1M13 1H2.2M13 1V11.8"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}

function HeaderNavPopTitle(id: number) {
  switch (id) {
    case 2:
      return (
        <Typography
          variant="h6"
          sx={{
            fontSize: 20,
            fontWeight: 700,
            color: "text.light",
          }}
        >
          Administrative
          <br />
          Courts
        </Typography>
      );
    case 3:
      return (
        <Typography
          variant="h6"
          sx={{
            fontSize: 20,
            fontWeight: 700,
            color: "text.light",
          }}
        >
          Competence and
          <br />
          Procedures
        </Typography>
      );
    case 4:
      return (
        <Typography
          variant="h6"
          sx={{
            fontSize: 20,
            fontWeight: 700,
            color: "text.light",
          }}
        >
          Laws and Rules
        </Typography>
      );
    case 5:
      return (
        <Typography
          variant="h6"
          sx={{
            fontSize: 20,
            fontWeight: 700,
            color: "text.light",
          }}
        >
          Judgments
          <br />
          and Orders
        </Typography>
      );
    case 6:
      return (
        <Typography
          variant="h6"
          sx={{
            fontSize: 20,
            fontWeight: 700,
            color: "text.light",
          }}
        >
          Principles of Administrative
          <br />
          Practices from Decision
        </Typography>
      );
    case 7:
      return (
        <Typography
          variant="h6"
          sx={{
            fontSize: 20,
            fontWeight: 700,
            color: "text.light",
          }}
        >
          Office of the
          <br />
          Administrative Courts
        </Typography>
      );
    case 8:
      return (
        <Typography
          variant="h6"
          sx={{
            fontSize: 20,
            fontWeight: 700,
            color: "text.light",
          }}
        >
          Press Release
        </Typography>
      );
    case 9:
      return (
        <Typography
          variant="h6"
          sx={{
            fontSize: 20,
            fontWeight: 700,
            color: "text.light",
          }}
        >
          International
          <br />
          Activities
        </Typography>
      );
    default:
      return null;
  }
}
