"use client";
import { Box, Link, Stack, Typography } from "@mui/material";
import { HeaderAdministrativeCourt } from "../../header";
import { SiteMenu } from "@/components/core/site-menu";
import { ConfigNavBar } from "@/layouts/config-nav-bar";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { JurisdictionBotton } from "../jurisdiction-botton";

export function StructureAndJurisdictionView() {
  const subMenuOne = ConfigNavBar.find(
    (item) => item.pathSegment === "administrative-court"
  )?.subMenu?.one;
  const subMenuTow = ConfigNavBar.find(
    (item) => item.pathSegment === "administrative-court"
  )?.subMenu?.tow;

  return (
    <>
      <HeaderAdministrativeCourt
        mainModule="Structure and Jurisdiction"
        title={
          <Typography variant="h6" fontSize={40} color="white">
            Structure <br />
            and Jurisdiction
          </Typography>
        }
      >
        <Stack direction="row" spacing={"40px"}>
          <SiteMenu
            subMenu={[...(subMenuOne || []), ...(subMenuTow || [])]}
            title="Administrative Courts"
          />
          <Box
            sx={{
              flex: 1,
              pt: "40px",
              gap: "40px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h1"
              fontSize={56}
              fontWeight={600}
              color="text.primary"
              fontFamily="Montserrat"
            >
              Structure
              <br />
              and Jurisdiction
            </Typography>

            <Image
              src="/assets/administrative-court/image_1.png"
              alt="image-1"
              width={1000}
              height={1000}
              style={{ width: "100%", height: "auto", borderRadius: "40px" }}
            />
            <Typography
              variant="h2"
              fontSize={28}
              fontWeight={600}
              fontFamily="Montserrat"
              lineHeight={"40px"}
            >
              The Administrative Courts have the competence to try and
              adjudicate administrative cases as prescribed by law. The Courts
              are divided into two levels: the Supreme Administrative Court and
              the Administrative Courts of First Instance.
            </Typography>
            <Stack direction="row" spacing={"40px"}>
              <Link href="#" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    gap: "40px",
                    flexDirection: "column",
                    "&:hover": {
                      ".MuiTypography-root": {
                        textDecoration: "underline",
                      },
                    },
                  }}
                >
                  <Image
                    src="/assets/administrative-court/image_2.png"
                    alt="image-2"
                    width={1000}
                    height={1000}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "40px",
                    }}
                  />
                  <Stack
                    direction="row"
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    flex={1}
                  >
                    <Typography
                      variant="h3"
                      fontSize={32}
                      fontWeight={600}
                      lineHeight={"40px"}
                      fontFamily="Montserrat"
                      color="text.primary"
                    >
                      1. The Supreme
                      <br />
                      Administrative Court
                    </Typography>
                    <BoxMore />
                  </Stack>
                </Box>
              </Link>
              <Link href="#" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    gap: "40px",
                    flexDirection: "column",
                    "&:hover": {
                      ".MuiTypography-root": {
                        textDecoration: "underline",
                      },
                    },
                  }}
                >
                  <Image
                    src="/assets/administrative-court/image_3.png"
                    alt="image-3"
                    width={1000}
                    height={1000}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "40px",
                    }}
                  />
                  <Stack
                    direction="row"
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    flex={1}
                  >
                    <Typography
                      variant="h3"
                      fontSize={32}
                      fontWeight={600}
                      color="text.primary"
                      fontFamily="Montserrat"
                      lineHeight={"40px"}
                    >
                      2. The Administrative Courts
                      <br />
                      of First Instance
                    </Typography>
                    <BoxMore />
                  </Stack>
                </Box>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </HeaderAdministrativeCourt>
      <JurisdictionBotton />
    </>
  );
}

const BoxMore = () => {
  return (
    <Box
      sx={{
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        bgcolor: "#FFC300",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
      }}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.25 10.75L10.75 1.25M10.75 1.25H2.2M10.75 1.25V9.8"
          stroke={"#FFFFFF"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};
