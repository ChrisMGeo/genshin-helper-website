import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Element } from "../consts";
import ThumbSide from "./thumb-side";
import { useNavigate } from "react-router-dom";
import { getTranslatedCharacterInfo } from "../consts/character-info";

interface CharSelectDropdownProps {
  characterKey: string;
  characterName?: string;
  color?:
  | "success"
  | "inherit"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "warning"
  | Element;
}

const CharSelectDropdown = ({
  characterKey,
  characterName,
  color = "success",
}: CharSelectDropdownProps) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (charKey?: string) => {
    setAnchorEl(null);
    if (charKey) navigate(`/${charKey}`);
  };
  return (
    <>
      <Button
        sx={{ borderRadius: 4 }}
        id="character-select-button"
        onClick={handleClick}
        color={color}
        variant="outlined"
        aria-controls={open ? "basic-menu-open" : "basic-menu-close"}
        aria-haspopup="true"
        aria-expanded={open ? "true" : "false"}
        startIcon={
          <ThumbSide
            src={`/genshin-helper-website/characters/${characterKey}/side-icon.webp`}
            alt={characterName}
          />
        }
      >
        {characterName ?? "Select a Character"}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        MenuListProps={{ "aria-labelledby": "character-select-button" }}
      >
        {getTranslatedCharacterInfo().map((char) => (
          <MenuItem
            key={`${char.id}`}
            onClick={() => handleClose(char.nameId)}
            selected={characterKey === char.nameId}
          >
            {char.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
export default CharSelectDropdown;
