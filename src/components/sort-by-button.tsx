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
import { useTranslation } from "react-i18next";

interface SortByButtonProps extends ButtonGroupProps {
  sortKeys: string[];
  value: string;
  displayValue: (str: string) => string;
  onChangeCriteria: (v: string) => void;
  order: SortOrder;
  onChangeOrder: (v: SortOrder) => void;
}

const SortByButton = ({
  sortKeys,
  value,
  onChangeCriteria,
  order,
  onChangeOrder,
  displayValue,
  ...props
}: SortByButtonProps) => {
  const { t } = useTranslation();
  return (
    <Box display="flex" alignItems="center" gap={1}>
      {t("ui.sort.sortBy")}:
      <ButtonGroup {...props}>
        <DropdownButton title={`${displayValue(value)}`} color="success">
          {sortKeys.map((key) => (
            <MenuItem
              key={key}
              selected={value === key}
              disabled={value === key}
              onClick={() => onChangeCriteria(key)}
            >
              {displayValue(key)}
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
