import { Box } from "@mui/material";

export const BoxMore = () => {
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
