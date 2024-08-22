import { AppBar, Box, Skeleton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Suspense } from "react";
import packageInfo from "../../package.json";
import { useTranslation } from "react-i18next";

const Footer = () => {
  return (
    <Suspense fallback={<Skeleton variant="rectangular" height={64} />}>
      <FooterContent />
    </Suspense>
  );
};
const FooterContent = () => {
  const { t } = useTranslation();
  return (
    <AppBar position="static">
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ px: 2, py: 1 }}
        gap={2}
      >
        <Typography variant="caption" sx={{ color: grey[200] }}>
          {t("ui.footer.contents")}
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: grey[200], textAlign: "right" }}
        >
          {t("ui.footer.versionText")}: <code>{packageInfo.version}</code>
        </Typography>
      </Box>
    </AppBar>
  );
};
export default Footer;
