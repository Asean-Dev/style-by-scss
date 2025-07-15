import { BoxLinkIcons } from "@/components/core/box-link-icons";
import { Stack, Typography } from "@mui/material";
import { IconsFooter } from "../icons";
import { FadeIn } from "@/components/core/fade-in";

const SocialData = [
  {
    icon: <IconsFooter.Facebook />,
    link: "#",
  },
  {
    icon: <IconsFooter.Link />,
    link: "#",
  },
  {
    icon: <IconsFooter.Youtube />,
    link: "#",
  },
  {
    icon: <IconsFooter.X />,
    link: "#",
  },
  {
    icon: <IconsFooter.Ig />,
    link: "#",
  },
  {
    icon: <IconsFooter.Tikkok />,
    link: "#",
  },
];
export const FooterSocial = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-end"
      sx={{
        width: "100%",
        minHeight: 56,
        background: "transparent",
      }}
    >
      <Stack
        direction="column"
        alignItems="flex-start"
        justifyContent={"flex-start"}
      >
        <FadeIn transform="bottom" fadeKey={"footer-social"}>
          <Typography
            variant="subtitle2"
            sx={{
              color: "white",
              fontFamily: "Montserrat",
            }}
          >
            The Administrative Court of Thailand
          </Typography>
        </FadeIn>
        <FadeIn transform="left" fadeKey={"footer-social"}>
          <Typography
            variant={"caption"}
            sx={{
              color: "white",
              fontFamily: "Montserrat",
            }}
          >
            120 Moo 3 Chaeng Watthana Rd., Lak Si, Bangkok 10210 Thailand
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent={"flex-start"}
          >
            <BoxLinkIcons
              icon={<IconsFooter.Phone />}
              href="tel:021411111"
              label="(66)-2141-1111"
            />

            <BoxLinkIcons
              icon={<IconsFooter.Mail />}
              href="mailto:saraban@admincourt.go.th"
              label="saraban@admincourt.go.th"
            />
          </Stack>
        </FadeIn>
      </Stack>

      <Stack
        direction="row"
        spacing={1}
        alignItems="flex-end"
        justifyContent={"flex-end"}
        height={1}
      >
        {SocialData.map((item, index) => (
          <FadeIn
            transform="right"
            fadeKey={"footer-social"}
            delay={index * 0.2}
            key={`footer-social-${index}`}
          >
            <BoxLinkIcons icon={item.icon} href={item.link} />
          </FadeIn>
        ))}
      </Stack>
    </Stack>
  );
};
