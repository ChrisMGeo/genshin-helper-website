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
import DropdownButton from "./DropdownButton";

interface SortByButtonProps extends ButtonGroupProps {
  sortKeys: string[];
  value: string;
  onChangeCriteria: (v: string) => void;
  order: "Ascending" | "Descending";
  onChangeOrder: (v: "Ascending" | "Descending") => void;
}

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
        <DropdownButton title={`${value}`}>
          {sortKeys.map((key) => (
            <MenuItem
              key={key}
              selected={value === key}
              disabled={value === key}
              onClick={() => onChangeCriteria(key)}
            >
              {key}
            </MenuItem>
          ))}
        </DropdownButton>
        <Button
          onClick={() =>
            onChangeOrder(order === "Ascending" ? "Descending" : "Ascending")
          }
          startIcon={
            <FontAwesomeIcon
              icon={
                order === "Ascending" ? faSortAmountDownAlt : faSortAmountUp
              }
              className="fa-fw"
            />
          }
        >
          {order}
        </Button>
      </ButtonGroup>
    </Box>
  );
};
export default SortByButton;
