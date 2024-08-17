import { Box, useScrollTrigger, Zoom } from "@mui/material";

const ScrollTop = ({ children }: { children: React.ReactElement }) => {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 85, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
};

export default ScrollTop;
