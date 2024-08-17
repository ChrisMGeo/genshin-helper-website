import { KeyboardArrowDown } from "@mui/icons-material";
import { Button, ButtonProps, Menu, Skeleton } from "@mui/material";
import { Suspense, useCallback, useState } from "react";

export type DropdownButtonProps = Omit<ButtonProps, "title"> & {
  title: React.ReactNode;
  id?: string;
  children: React.ReactNode;
};
const DropdownButton = ({
  title,
  children,
  id = "dropdownbtn",
  ...props
}: DropdownButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) =>
      setAnchorEl(event.currentTarget),
    [setAnchorEl]
  );
  const handleClose = useCallback(() => setAnchorEl(null), [setAnchorEl]);

  return (
    <Suspense
      fallback={
        <Button endIcon={<KeyboardArrowDown />} {...props}>
          <Skeleton width={50} />
        </Button>
      }
    >
      <Button
        {...props}
        id={id}
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : "false"}
        onClick={handleClick}
        endIcon={<KeyboardArrowDown />}
      >
        {title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": id,
        }}
        onClick={handleClose}
      >
        <Suspense fallback={<Skeleton width="100%" height="1000" />}>
          {children}
        </Suspense>
      </Menu>
    </Suspense>
  );
};
export default DropdownButton;
