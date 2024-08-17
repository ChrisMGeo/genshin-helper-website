import { CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";

const CardContentEvenPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding: 16px;
  }
`);
export default CardContentEvenPadding;
