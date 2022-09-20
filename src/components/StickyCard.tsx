import { Card, CardProps } from "@mui/material";
import { useSticky } from "../hooks/useSticky";

const StickyCard = ({ children, ...rest }: CardProps) => {
  const [cardRef, sticky] = useSticky<HTMLDivElement>();
  return (
    <Card
      {...rest}
      sx={{
        borderTopLeftRadius: sticky ? "0px !important" : "16px !important",
        borderTopRightRadius: sticky ? "0px !important" : "16px !important",
        borderBottomRightRadius: "16px",
        borderBottomLeftRadius: "16px",
        position: "sticky",
        top: "0px",
        zIndex: 2,
      }}
      ref={cardRef}
    >
      {children}
    </Card>
  );
};
export default StickyCard;
