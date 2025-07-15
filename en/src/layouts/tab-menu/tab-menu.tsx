"use client";
import { useBoolean } from "@/hooks/use-boolean";
import { Box, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { IconsFooter } from "../footer/icons";

export const TabMenu = () => {
  const isOpen = useBoolean(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
    exit: {
      y: 20,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  const SocialData = [
    {
      icon: <IconsFooter.Facebook color="#fff" />,
      link: "#",
    },
    {
      icon: <IconsFooter.Link color="#fff" />,
      link: "#",
    },
    {
      icon: <IconsFooter.Youtube color="#fff" />,
      link: "#",
    },
    {
      icon: <IconsFooter.X color="#fff" />,
      link: "#",
    },
    {
      icon: <IconsFooter.Ig color="#fff" />,
      link: "#",
    },
    {
      icon: <IconsFooter.Tikkok color="#fff" />,
      link: "#",
    },
  ];
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "25%",
        right: 0,
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Box
          sx={{
            width: 58,
            height: 58,
            borderTopLeftRadius: 8,
            backgroundColor: "primary.main",
            transition: "all 0.3s ease",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
          }}
          component="a"
          href="#"
        >
          <Typography
            variant="body1"
            sx={{
              padding: "0px",
              margin: 0,
              fontSize: 12,
              fontWeight: 700,
              color: "white",
              textAlign: "center",
            }}
          >
            FOLLOW
            <br />
            US
          </Typography>
        </Box>
      </motion.div>
      <AnimatePresence>
        {isOpen.value && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {SocialData.map((social, index) => (
              <motion.div
                key={`social-${index}`}
                variants={itemVariants}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  sx={{
                    width: 58,
                    height: 58,
                    backgroundColor: "primary.main",
                    transition: "background-color 0.3s ease",
                    cursor: "pointer",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                  component="a"
                  href={social.link}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      padding: "0px",
                      margin: 0,
                      fontSize: 20,
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    {social.icon}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          isOpen.onToggle();
        }}
      >
        <Box
          sx={{
            width: 58,
            height: 58,
            borderBottomLeftRadius: 8,
            backgroundColor: "secondary.main",
            transition: "background-color 0.3s ease",
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{
              rotate: isOpen.value ? 180 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <path
              d="M6.16934 6.30897C8.24667 4.23034 11.6145 4.23034 13.6918 6.30897C15.7694 8.38785 15.7694 11.7586 13.6918 13.8375L12.2612 15.2689C11.9684 15.5619 11.9686 16.0368 12.2616 16.3296C12.5545 16.6224 13.0294 16.6222 13.3222 16.3292L14.7528 14.8978C17.4157 12.2332 17.4157 7.91323 14.7528 5.24864C12.0896 2.58379 7.77154 2.58379 5.10835 5.24864L2.2472 8.11157C-0.415733 10.7762 -0.415733 15.0961 2.2472 17.7607C3.48184 18.9961 5.07401 19.6593 6.69015 19.7488C7.10372 19.7718 7.45758 19.4551 7.48051 19.0415C7.50343 18.6279 7.18674 18.2741 6.77316 18.2512C5.51156 18.1812 4.27192 17.6647 3.30819 16.7004C1.2306 14.6215 1.2306 11.2508 3.30819 9.1719L6.16934 6.30897Z"
              fill="white"
            />
            <path
              d="M17.3099 4.25117C16.8963 4.22824 16.5424 4.54493 16.5195 4.95851C16.4966 5.37209 16.8133 5.72595 17.2268 5.74887C18.4884 5.8188 19.7281 6.3353 20.6918 7.29963C22.7694 9.37851 22.7694 12.7492 20.6918 14.8281L17.8307 17.691C15.7533 19.7697 12.3855 19.7697 10.3082 17.691C8.2306 15.6122 8.2306 12.2414 10.3082 10.1626L11.7388 8.7311C12.0316 8.43812 12.0314 7.96324 11.7384 7.67044C11.4454 7.37764 10.9706 7.37779 10.6778 7.67077L9.2472 9.10224C6.58427 11.7668 6.58427 16.0868 9.2472 18.7514C11.9104 21.4162 16.2285 21.4162 18.8916 18.7514L21.7528 15.8884C24.4157 13.2238 24.4157 8.90389 21.7528 6.2393C20.5182 5.00389 18.926 4.34075 17.3099 4.25117Z"
              fill="white"
            />
          </motion.svg>
        </Box>
      </motion.div>
    </Box>
  );
};
