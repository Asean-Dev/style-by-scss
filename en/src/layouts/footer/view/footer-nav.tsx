import { FadeIn } from "@/components/core/fade-in";
import { footerNavbar } from "@/layouts/config-nav-bar";
import { Grid, Link, Stack, Typography } from "@mui/material";

export const FooterNav = () => {
  return (
    <Grid container sx={{ pt: "240px" }}>
      {footerNavbar.map((item, index) => (
        <Grid size={{ xs: 6, md: 2 }} key={index}>
          <FadeIn
            transform="bottom"
            fadeKey={`footer-nav-${index}`}
            delay={index * 0.2}
          >
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontSize: { xs: "14px", xl2: "16px" },
                fontWeight: 600,
                mb: 2,
                fontFamily: "Montserrat",
              }}
            >
              {item.title}
            </Typography>
            <Stack spacing={0.75} direction={"column"}>
              {item.items.map((sub, subIdx) => (
                <Stack direction={"row"} spacing={"0.5rem"} key={subIdx}>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: { xs: "12px", md: "14px" },
                      fontFamily: "Montserrat",
                    }}
                  >
                    ·
                  </Typography>
                  <Link
                    key={subIdx}
                    href={sub.linkUrl}
                    underline="none"
                    sx={{
                      color: "white",
                      fontSize: "13px",
                      mb: 1,
                      transition: "color 0.2s",
                      "&:hover": { color: "secondary.main" },
                      cursor: "pointer",
                      display: "block",
                      fontFamily: "Montserrat",
                    }}
                  >
                    {sub.title}
                  </Link>
                </Stack>
              ))}
            </Stack>
          </FadeIn>
        </Grid>
      ))}
    </Grid>
  );
};
