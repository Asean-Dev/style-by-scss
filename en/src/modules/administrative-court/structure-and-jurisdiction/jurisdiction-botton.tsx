import { ContainerCore } from "@/components/core/container";
import { Box, Divider, Link, Stack, Typography } from "@mui/material";
import { BoxMore } from "../box-more";
import { JurisdictionCentral } from "./jurisdiction-central";
import { mock } from "./_mock";

export const JurisdictionBotton = () => {
  return (
    <Box
      sx={{
        bgcolor: "#ffff",
        width: "100vw",
        height: "100%",
        mt: "80px",
        borderTopLeftRadius: "40px",
        borderTopRightRadius: "40px",
        pt: "60px",
      }}
    >
      <ContainerCore sx={{ display: "relative", pb: "220px" }}>
        <Stack
          direction="column"
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          gap={"60px"}
        >
          <Typography
            variant="h2"
            fontSize={32}
            fontWeight={600}
            fontFamily="Montserrat"
            lineHeight={"40px"}
            color="primary.main"
          >
            Jurisdiction, Contact Information,
            <br />
            and Inauguration of the Administrative Courts
          </Typography>
          <Stack direction="column" spacing={"16px"}>
            <Stack direction="row" flex={1} spacing={"16px"}>
              <CenterBox title="Central Administrative Court" />
              <CenterBox title="Chiang Mai Administrative Court" />
              <CenterBox title="Songkhla Administrative Court" />
              <CenterBox title="Nakhon Ratchasima Administrative Court" />
            </Stack>
            <Stack direction="row" flex={1} spacing={"16px"}>
              <CenterBox title="Khon Kaen Administrative Court" />
              <CenterBox title="Phitsanulok Administrative Court" />
              <CenterBox title="Rayong Administrative Court" />
              <CenterBox title="Nakhon Si Thammarat Administrative Court" />
            </Stack>
            <Stack direction="row" flex={1} spacing={"16px"}>
              <CenterBox title="Udon Thani Administrative Court" />
              <CenterBox title="Ubon Ratchathani Administrative Court" />
              <CenterBox title="Phetchaburi Administrative Court" />
            </Stack>
            <Stack direction="row" flex={1} spacing={"16px"}>
              <CenterBox title="Nakhon Sawan Administrative Court" />
              <CenterBox title="Suphan Buri Administrative Court" />
              <CenterBox title="Phuket Administrative Court" />
              <CenterBox title="Yala Administrative Courtt" />
            </Stack>
          </Stack>
          {mock.map((item) => (
            <JurisdictionCentral key={item.id} item={item} />
          ))}
        </Stack>
      </ContainerCore>
    </Box>
  );
};

const CenterBox = ({ title }: { title: string }) => {
  return (
    <Link href="#" style={{ textDecoration: "none", borderRadius: "50px" }}>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          borderRadius: "50px",
          bgcolor: "#EDEDED",
          p: "16px 24px 16px 24px",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.7471 6.53974C22.9302 6.54053 23.1092 6.59435 23.2625 6.69469C23.4164 6.79927 23.5368 6.94606 23.6094 7.11743L26.6006 14.0867C26.6533 14.2089 26.6791 14.341 26.6763 14.4741V14.4825C26.6763 15.5246 26.2624 16.524 25.5255 17.2609C24.7886 17.9978 23.7892 18.4117 22.7471 18.4117C21.705 18.4117 20.7056 17.9978 19.9687 17.2609C19.2318 16.524 18.8178 15.5246 18.8178 14.4825V14.4741C18.8151 14.341 18.8409 14.2089 18.8936 14.0867L21.3307 8.40753H16.9736V21.1031L23.5723 23.8383C23.772 23.9208 23.9368 24.07 24.0387 24.2604C24.1406 24.4508 24.1732 24.6707 24.1311 24.8826C24.089 25.0944 23.9747 25.2851 23.8077 25.4221C23.6406 25.559 23.4313 25.6338 23.2153 25.6336H8.92982C8.71383 25.6338 8.50448 25.559 8.33747 25.4221C8.17046 25.2851 8.05614 25.0944 8.01401 24.8826C7.97188 24.6707 8.00455 24.4508 8.10645 24.2604C8.20834 24.07 8.37316 23.9208 8.57277 23.8383L15.1075 21.1301V8.40753H10.6696L13.1067 14.0867C13.1594 14.2089 13.1852 14.341 13.1825 14.4741V14.4825C13.1825 15.5246 12.7685 16.524 12.0316 17.2609C11.2947 17.9978 10.2953 18.4117 9.25319 18.4117C8.21109 18.4117 7.21166 17.9978 6.47478 17.2609C5.7379 16.524 5.32393 15.5246 5.32393 14.4825V14.4741C5.32117 14.341 5.34702 14.2089 5.39972 14.0867L8.39088 7.11743C8.46252 6.94596 8.58322 6.79948 8.73782 6.69637C8.89048 6.59463 9.06974 6.54015 9.25319 6.53974H15.1075V5.39448C15.1075 5.14702 15.2058 4.90969 15.3808 4.73471C15.5558 4.55973 15.7931 4.46143 16.0406 4.46143C16.288 4.46143 16.5253 4.55973 16.7003 4.73471C16.8753 4.90969 16.9736 5.14702 16.9736 5.39448V6.53974H22.7471ZM11.2456 14.4842L9.25319 9.84079L7.26246 14.4825L11.2456 14.4842ZM24.7395 14.4842L22.7471 9.84248L20.7547 14.4842H24.7395Z"
            fill="#010202"
          />
        </svg>

        <Typography
          variant="body1"
          fontSize={20}
          fontWeight={400}
          fontFamily="Montserrat"
          lineHeight={"32px"}
        >
          {title}
        </Typography>
      </Box>
    </Link>
  );
};
