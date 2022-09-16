import { Close } from "@mui/icons-material";
import { Button, ButtonProps } from "@mui/material";
type CloseButtonProps = ButtonProps & {
  large?: boolean;
};
export default function CloseButton({
  large = false,
  ...props
}: CloseButtonProps) {
  if (large)
    return (
      <Button variant="outlined" color="error" startIcon={<Close />} {...props}>
        Close
      </Button>
    );
  return (
    <Button
      variant="outlined"
      color="error"
      sx={{ p: 1, minWidth: 0 }}
      {...props}
    >
      <Close />
    </Button>
  );
}
