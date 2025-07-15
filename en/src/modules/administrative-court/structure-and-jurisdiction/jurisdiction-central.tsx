import { Divider, Link, Stack, Typography } from "@mui/material";
import { BoxMore } from "../box-more";
import Image from "next/image";

type JurisdictionCentralProps = {
  item: {
    id: string;
    title: string;
    description: string;
    image: string;
    content: string;
    address: string;
    inauguration: string;
    tel: string;
    fax: string;
  };
};
export const JurisdictionCentral = (props: JurisdictionCentralProps) => {
  const { item } = props;
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={"16px"}
      sx={{ px: "214px" }}
      width={1}
    >
      <Link href="#" style={{ textDecoration: "none", borderRadius: "30px" }}>
        <Stack
          direction={"column"}
          spacing={"32px"}
          sx={{
            width: "1492px",
            height: "629px",
            borderRadius: "30px",
            pt: "30px",
            px: "154px",
            bgcolor: "#F8F8F8",
            color: "text.light",
            transition: "all 0.4s ease",
            "&:hover": {
              bgcolor: "primary.main",
              "& .MuiTypography-root": {
                color: "text.light",
              },
              "& .MuiDivider-root": {
                borderColor: "text.light",
              },
            },
          }}
        >
          <Stack
            direction={"row"}
            width={1}
            justifyContent={"space-between"}
            height={"fit-content"}
          >
            <Stack direction={"row"} spacing={"20px"}>
              <Typography
                variant="h3"
                fontSize={30}
                fontWeight={600}
                fontFamily="Montserrat"
                lineHeight={"32px"}
                color="text.yellow"
              >
                {item.id}
              </Typography>
              <Stack direction={"column"} spacing={"4px"} width={1}>
                <Typography
                  variant="body1"
                  fontSize={30}
                  fontWeight={600}
                  fontFamily="Montserrat"
                  lineHeight={"32px"}
                  //   color="text.light"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={20}
                  fontWeight={400}
                  fontFamily="Montserrat"
                  lineHeight={"32px"}
                  //   color="text.light"
                >
                  Administrative Court
                </Typography>
              </Stack>
            </Stack>
            <Stack justifyContent={"flex-end"} alignItems={"flex-end"}>
              <BoxMore />
            </Stack>
          </Stack>
          <Divider flexItem sx={{ borderColor: "#D9D9D9" }} />
          <Stack flex={1} spacing={"40px"} direction={"row"}>
            <Image
              src={item.image}
              alt="jurisdiction-central"
              width={551}
              height={394}
              style={{
                width: "551px",
                height: "394px",
              }}
            />
            <Stack direction={"column"} spacing={"40px"} width={"554px"}>
              <Typography
                variant="body1"
                fontSize={20}
                fontWeight={400}
                fontFamily="Montserrat"
                lineHeight={"32px"}
                // color="text.light"
              >
                {item.content}
              </Typography>
              <Stack direction={"column"} spacing={"16px"}>
                <Stack direction={"column"} spacing={"10px"}>
                  <Typography
                    variant="body1"
                    fontSize={16}
                    fontWeight={600}
                    fontFamily="Montserrat"
                    // color="text.light"
                  >
                    Office of the Administrative Courts
                  </Typography>

                  <Typography
                    variant="body1"
                    fontSize={16}
                    fontWeight={400}
                    fontFamily="Montserrat"
                    // color="text.light"
                  >
                    {item.address}
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={"129px"}>
                  <Typography
                    variant="body1"
                    fontSize={16}
                    fontWeight={600}
                    fontFamily="Montserrat"
                    // color="text.light"
                  >
                    Tel
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize={16}
                    fontWeight={400}
                    fontFamily="Montserrat"
                    // color="text.light"
                  >
                    {item.tel}
                  </Typography>
                </Stack>
                {item.fax && (
                  <Stack direction={"row"} spacing={"129px"}>
                    <Typography
                      variant="body1"
                      fontSize={16}
                      fontWeight={600}
                      fontFamily="Montserrat"
                      // color="text.light"
                    >
                      Fax
                    </Typography>
                    <Typography
                      variant="body1"
                      fontSize={16}
                      fontWeight={400}
                      fontFamily="Montserrat"
                      // color="text.light"
                    >
                      {item.fax}
                    </Typography>
                  </Stack>
                )}
                <Stack direction={"row"} spacing={"45px"}>
                  <Typography
                    variant="body1"
                    fontSize={16}
                    fontWeight={600}
                    fontFamily="Montserrat"
                    // color="text.light"
                  >
                    Inauguration
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize={16}
                    fontWeight={400}
                    fontFamily="Montserrat"
                    // color="text.light"
                  >
                    {item.inauguration}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Link>
    </Stack>
  );
};
