import {
  alpha,
  Box,
  Breadcrumbs,
  ClickAwayListener,
  Collapse,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { FadeIn } from "./fade-in";
import { motion } from "framer-motion";

type BreadcrumbsProps = {
  title: React.ReactNode;
  links: {
    modules: string;
    mainModule: string;
    subModules: {
      title: string;
      linkUrl: string;
      pathSegment: string;
    }[];
  };
};

export const CustomBreadcrumbs = ({ title, links }: BreadcrumbsProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSubModule, setSelectedSubModule] = useState(
    links.subModules.find(
      (subModule) => subModule.pathSegment === links.mainModule
    ) || { title: "", linkUrl: "", pathSegment: "" }
  );

  useEffect(() => {
    setSelectedSubModule(
      links.subModules.find(
        (subModule) => subModule.title === links.mainModule
      ) || { title: "", linkUrl: "", pathSegment: "" }
    );
  }, [links.subModules, links.mainModule]);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSubModuleSelect = (subModule: {
    title: string;
    linkUrl: string;
    pathSegment: string;
  }) => {
    setIsDropdownOpen(false);
    window.location.href = subModule.linkUrl;
  };

  const handleClickAway = () => {
    setIsDropdownOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        height: "340px",
        width: "1800px",
        marginBottom: "100px",
        padding: "40px",
        borderRadius: "40px",
        overflow: "visible",
        backgroundImage: `url(/assets/breadcrumbs/${selectedSubModule.pathSegment}.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          backgroundImage: "linear-gradient(to right, #121D77, #2136DD00)",
          position: "absolute",
          borderRadius: "40px",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      <Stack
        direction="row"
        alignItems="flex-end"
        justifyContent="space-between"
        height={1}
        width={1}
        zIndex={100}
      >
        <FadeIn fadeKey={selectedSubModule.pathSegment} transform={"left"}>
          <Box
            sx={{
              fontFamily: "Montserrat",
              textTransform: "uppercase",
              zIndex: 100,
            }}
          >
            {title}
          </Box>
        </FadeIn>
        <FadeIn fadeKey={selectedSubModule.pathSegment} transform={"right"}>
          <Stack direction="row" zIndex={100}>
            <Box
              sx={{
                p: "8px 28px 8px  8px",
                backgroundColor: "white",
                borderRadius: "40px",
                width: "fit-content",
                minWidth: "fit-content",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "56px",
                position: "relative",
                transition: "width 0.8s ease-in-out",
              }}
            >
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  bgcolor: (theme) => theme.palette.text.yellow,
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: "20px",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_1101_1397"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M0.450195 0L0.450195 20H19.5493V0H0.450195Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_1101_1397)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.193 0.823933C10.9372 -0.274642 9.0623 -0.274644 7.80644 0.823924L1.89159 5.99802C0.975625 6.79927 0.450195 7.95698 0.450195 9.17397V16.6687C0.450195 18.5085 1.94164 20 3.78144 20H16.218C18.0578 20 19.5492 18.5085 19.5492 16.6687V9.17397C19.5492 7.95698 19.0239 6.79927 18.1079 5.99802L12.193 0.823933ZM8.13966 13.8295C7.75453 13.8295 7.44231 14.1417 7.44231 14.5268C7.44231 14.912 7.75453 15.2242 8.13966 15.2242H11.8589C12.244 15.2242 12.5562 14.912 12.5562 14.5268C12.5562 14.1417 12.244 13.8295 11.8589 13.8295H8.13966Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </Box>
              <Breadcrumbs
                aria-label="breadcrumb"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 0 0 0",
                  "& .MuiBreadcrumbs-ol": {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                  },
                }}
                separator={<Separator />}
              >
                <Typography
                  variant="body1"
                  fontSize={16}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  m={0}
                  sx={{
                    color: (theme) => alpha(theme.palette.text.dark, 0.5),
                  }}
                >
                  {links.modules}
                </Typography>

                <ClickAwayListener onClickAway={handleClickAway}>
                  <Box sx={{ position: "relative" }}>
                    <Box
                      onClick={handleDropdownToggle}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        fontSize: 16,
                        fontWeight: 400,
                        fontFamily: "Montserrat",
                        color: (theme) => theme.palette.text.dark,
                        whiteSpace: "nowrap",
                        "&:hover": {
                          color: (theme) => theme.palette.primary.main,
                        },
                      }}
                    >
                      {selectedSubModule.title}
                      <Box
                        sx={{
                          ml: 1,
                          transform: isDropdownOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          transition: "transform 0.5s ease-in-out",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <svg
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.5L6 6.5L11 1.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>
                    </Box>

                    <Collapse
                      in={isDropdownOpen}
                      timeout={100}
                      sx={{ zIndex: 99999 }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: "100%",
                          right: 0,
                          mt: 2,
                          width: "fit-content",
                          minWidth: "200px",
                          bgcolor: "white",
                          borderRadius: "12px",
                          zIndex: 99999,
                          overflow: "hidden",
                          border: "1px solid",
                          borderColor: (theme) =>
                            alpha(theme.palette.text.dark, 0.1),
                        }}
                      >
                        {links.subModules.map((subModule, index) => (
                          <Box
                            key={subModule.title}
                            onClick={() => handleSubModuleSelect(subModule)}
                            sx={{
                              p: "12px 16px",
                              cursor: "pointer",
                              fontSize: 14,
                              fontWeight: 400,
                              fontFamily: "Montserrat",
                              color: (theme) => theme.palette.text.dark,
                              bgcolor:
                                selectedSubModule.title === subModule.title
                                  ? (theme) =>
                                      alpha(theme.palette.primary.main, 0.1)
                                  : "transparent",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                bgcolor: (theme) =>
                                  alpha(theme.palette.primary.main, 0.05),
                              },
                            }}
                          >
                            <Link
                              href={subModule.linkUrl}
                              sx={{
                                textDecoration: "none",
                                color: (theme) => theme.palette.text.dark,
                              }}
                            >
                              {subModule.title}
                            </Link>
                          </Box>
                        ))}
                      </Box>
                    </Collapse>
                  </Box>
                </ClickAwayListener>
              </Breadcrumbs>
            </Box>
          </Stack>
        </FadeIn>
      </Stack>
    </motion.div>
  );
};

function Separator() {
  return (
    <Box
      component="span"
      sx={{
        fontSize: 16,
        fontWeight: 400,
        fontFamily: "Montserrat",
        color: (theme) => alpha(theme.palette.text.dark, 0.5),
      }}
    >
      /
    </Box>
  );
}
