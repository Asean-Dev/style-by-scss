import { ContainerCore } from "@/components/core/container";
import Image from "next/image";
import { alpha, Box, Link, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ConfigNavBar } from "../config-nav-bar";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useAnimation,
} from "framer-motion";
import { useRef, useState } from "react";
import { HeaderNavPop } from "./header-nav-pop";
import { FadeIn } from "@/components/core/fade-in";

export const HeaderNav = () => {
  const theme = useTheme();
  const controls = useAnimation();
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();

  const [getId, setGetId] = useState<{ id: number; isOpen: boolean }>({
    id: 1,
    isOpen: false,
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const delta = latest - lastScrollY.current;
    if (Math.abs(delta) < 5) return;

    if (delta > 0) {
      controls.start({
        y: -60,
      });
    } else {
      controls.start({
        y: 0,
      });
    }

    lastScrollY.current = latest;
  });
  return (
    <motion.div
      animate={controls}
      initial={{ top: 60 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      style={{
        zIndex: 999,
        position: "sticky",
        top: 60,
        backgroundColor: alpha(theme.palette.text.light, 0.7),
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        marginBottom: "60px",
      }}
    >
      <FadeIn transform="bottom" fadeKey="header-nav">
        <ContainerCore
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "128px",
            justifyContent: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={4}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box component="a" href={"#"} sx={{ textDecoration: "none" }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Image
                  src="/assets/layout/logo.svg"
                  alt="logo"
                  width={84}
                  height={84}
                  style={{ width: "auto", height: "84px" }}
                />
                <Stack direction="column" spacing={0}>
                  <Typography
                    sx={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "text.primary",
                      whiteSpace: "nowrap",
                      fontFamily: "Montserrat",
                      m: "0 0 0 0 ",
                    }}
                  >
                    The Administrative Court of Thailand
                  </Typography>
                </Stack>
              </Stack>
            </Box>
            <Stack
              direction="row"
              spacing={"21px"}
              alignItems="center"
              justifyContent="flex-end"
              component="nav"
              // width="1340px"
              height={"34px"}
            >
              {ConfigNavBar.map((item) => (
                <Typography
                  component={item.title == "Home" ? "a" : "span"}
                  href={item.title == "Home" ? item.linkUrl : undefined}
                  key={item.id}
                  onClick={() =>
                    setGetId({
                      id: item.id,
                      isOpen: item.id === getId.id ? !getId.isOpen : true,
                    })
                  }
                  sx={{
                    textDecoration: "none",
                    fontSize: { md: 12, xl: "14px" },
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    textAlign: "center",
                    fontFamily: "Montserrat",
                    color: item.id === getId.id ? "text.primary" : "text.dark",
                    whiteSpace:
                      item.title === "Laws and Rules" ||
                      item.title === "Press Release"
                        ? "nowrap"
                        : "none",
                    "&:hover": {
                      color: "text.primary",
                    },
                  }}
                >
                  {item.title}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </ContainerCore>
      </FadeIn>

      <HeaderNavPop id={getId} setGetId={setGetId} />
    </motion.div>
  );
};
