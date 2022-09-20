import { AppBar, Box, Skeleton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Suspense } from "react";
import packageInfo from "../package.json";

export default function Footer() {
  return (
    <Suspense fallback={<Skeleton variant="rectangular" height={64} />}>
      <FooterContent />
    </Suspense>
  );
}
function FooterContent() {
  return (
    <AppBar position="static">
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ px: 2, py: 1 }}
        gap={2}
      >
        <Typography variant="caption" sx={{ color: grey[200] }}>
          Genshin Helper Website is not affiliated with or endorsed by
          HoYoverse.
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: grey[200], textAlign: "right" }}
        >
          Genshin Helper Version: <code>{packageInfo.version}</code>
        </Typography>
      </Box>
    </AppBar>
  );
}
