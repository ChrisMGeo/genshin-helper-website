import {
  faSortAmountDownAlt,
  faSortAmountUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
  MenuItem,
  Box,
} from "@mui/material";
import DropdownButton from "./dropdown-button";
import { SortOrder } from "../types/sort";

interface SortByButtonProps extends ButtonGroupProps {
  sortKeys: string[];
  value: string;
  onChangeCriteria: (v: string) => void;
  order: SortOrder;
  onChangeOrder: (v: SortOrder) => void;
}

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const SortByButton = ({
  sortKeys,
  value,
  onChangeCriteria,
  order,
  onChangeOrder,
  ...props
}: SortByButtonProps) => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      Sort by:
      <ButtonGroup {...props}>
        <DropdownButton title={`${value}`} color="success">
          {sortKeys.map((key) => (
            <MenuItem
              key={key}
              selected={value === key}
              disabled={value === key}
              onClick={() => onChangeCriteria(key)}
            >
              {capitalize(key)}
            </MenuItem>
          ))}
        </DropdownButton>
        <Button
          color="success"
          onClick={() =>
            onChangeOrder(order === "ascending" ? "descending" : "ascending")
          }
        >
          <FontAwesomeIcon
            icon={
              order === "ascending" ? faSortAmountDownAlt : faSortAmountUp
            }
            className="fa-fw"
          />
        </Button>
      </ButtonGroup>
    </Box>
  );
};
export default SortByButton;
