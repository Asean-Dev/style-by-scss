import { ContainerCore } from "@/components/core/container";
import { useBoolean } from "@/hooks/use-boolean";
import {
  Avatar,
  Box,
  Divider,
  Link,
  Stack,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
import { Icons } from "../icons";
import { FadeIn } from "@/components/core/fade-in";

export const HeaderTop = () => {
  const theme = useTheme();
  const isOpen = useBoolean(false);
  const isSearchOpen = useBoolean(false);
  const [searchValue, setSearchValue] = useState("");
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();
  const controls = useAnimation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const delta = latest - lastScrollY.current;
    if (Math.abs(delta) < 5) return;
    if (delta > 0) {
      controls.start({
        opacity: 0,
        y: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
    } else {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.1, ease: "easeInOut" },
      });
    }
    lastScrollY.current = latest;
  });

  return (
    <motion.div
      animate={controls}
      initial={{ opacity: 1, y: 0 }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        backgroundColor: theme.palette.text.light,
      }}
    >
      <ContainerCore
        sx={{
          height: "60px",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          height={1}
        >
          {/* ซ้าย */}
          <FadeIn transform="left" fadeKey="header-top">
            <Stack direction="row" spacing={2} alignItems="center">
              <Stack
                direction="row"
                spacing={1}
                component={Link}
                href="/"
                sx={{ textDecoration: "none", color: "text.light" }}
              >
                <Icons.SingMap />
                <Typography variant="caption" sx={{ fontFamily: "Montserrat" }}>
                  Site Map
                </Typography>
              </Stack>
              <Divider orientation="vertical" flexItem />
              <Stack
                direction="row"
                spacing={1}
                component={Link}
                href="/"
                sx={{ textDecoration: "none", color: "text.light" }}
              >
                <Icons.Location />
                <Typography variant="caption" sx={{ fontFamily: "Montserrat" }}>
                  Contact the agency
                </Typography>
              </Stack>
            </Stack>
          </FadeIn>
          {/* ขวา */}
          <FadeIn transform="right" fadeKey="header-top">
            <Stack direction="row" spacing={1} alignItems="center">
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{
                  backgroundColor: "primary.dark",
                  color: "text.light",
                  borderRadius: "50px",
                  p: 0.5,
                  cursor: "pointer",
                  height: "32px",
                }}
                onClick={() => isOpen.onToggle()}
              >
                <Avatar
                  alt="English"
                  src="/assets/layout/language.svg"
                  sx={{ width: 16, height: 16 }}
                />
                <Typography
                  variant="caption"
                  color="text.light"
                  sx={{ fontFamily: "Montserrat" }}
                >
                  Eng
                </Typography>
                <Box
                  sx={{
                    transition: "transform 0.3s ease-in-out",
                    transform: isOpen.value ? "rotate(180deg)" : "rotate(0deg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icons.Rotate />
                </Box>
              </Stack>

              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <AnimatePresence mode="wait">
                  {!isSearchOpen.value ? (
                    <motion.div
                      key="search-icon"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        bgcolor="secondary.main"
                        borderRadius="50px"
                        width={32}
                        height={32}
                        justifyContent="center"
                        sx={{ cursor: "pointer" }}
                        onClick={isSearchOpen.onTrue}
                      >
                        <Icons.Search
                          sx={{ width: 16, height: 16, color: "text.light" }}
                        />
                      </Stack>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="search-input"
                      initial={{ opacity: 0, width: 32 }}
                      animate={{ opacity: 1, width: 400 }}
                      exit={{ opacity: 0, width: 32 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: 32,
                      }}
                    >
                      <TextField
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Search..."
                        variant="outlined"
                        size="small"
                        autoFocus
                        onBlur={() => {
                          if (!searchValue) {
                            isSearchOpen.onFalse();
                          }
                        }}
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            console.log("Search:", searchValue);
                            isSearchOpen.onFalse();
                          }
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              sx={{ marginLeft: 0, paddingLeft: 0 }}
                            >
                              <Icons.Search
                                sx={{
                                  width: 16,
                                  height: 16,
                                  color: "text.light",
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          fontFamily: "Montserrat",
                          width: "100%",
                          height: 32,
                          margin: 0,
                          "& .MuiOutlinedInput-root": {
                            height: "32px !important",
                            minHeight: "32px !important",
                            borderRadius: "50px",
                            backgroundColor: "secondary.main",
                            color: "text.light",
                            border: "none",
                            padding: 0,
                            paddingLeft: "8px",
                            paddingRight: "16px",
                            "& fieldset": {
                              border: "none",
                            },
                            "&:hover fieldset": {
                              border: "none",
                            },
                            "&.Mui-focused fieldset": {
                              border: "none",
                            },
                            "& .MuiInputAdornment-root": {
                              marginLeft: 0,
                              marginRight: "4px",
                            },
                            "& input": {
                              color: "text.light",
                              padding: "0 4px",
                              fontSize: "16px",
                              height: "32px",
                              lineHeight: "32px",
                              "&::placeholder": {
                                color: "rgba(255, 255, 255, 0.7)",
                                opacity: 1,
                              },
                            },
                          },
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </Stack>
          </FadeIn>
        </Stack>
      </ContainerCore>
    </motion.div>
  );
};
