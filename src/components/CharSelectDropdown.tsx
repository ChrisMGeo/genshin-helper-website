import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import characterAssets from "../data/Characters";
import { CharacterKey, ElementKey } from "../types/consts";
import ThumbSide from "./ThumbSide";
import { allCharacters } from "../types/api";
import { useNavigate } from "react-router-dom";

interface CharSelectDropdownProps {
  characterKey: CharacterKey;
  characterName?: string;
  color?:
    | "success"
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "warning"
    | ElementKey;
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
            src={characterAssets[characterKey].IconSide}
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
        {allCharacters.map((char) => (
          <MenuItem
            key={`${char.id}`}
            onClick={() => handleClose(char.characterKey)}
            selected={characterKey === char.characterKey}
          >
            {char.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
export default CharSelectDropdown;
