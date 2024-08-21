import { Card, CardProps } from "@mui/material";
import { useSticky } from "../hooks/use-sticky";

const StickyCard = ({ children, ...rest }: CardProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cardRef, _sticky, stickyFactor] = useSticky<HTMLDivElement>(64);
  return (
    <Card
      {...rest}
      sx={{
        borderTopLeftRadius: `${16 - stickyFactor * 16}px ! important`,
        borderTopRightRadius: `${16 - stickyFactor * 16}px ! important`,
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
