import { MainCard } from "components";
import { useIsSmall } from "hooks";

const MessageCard = ({
  openDrawer,
  children,
}: {
  openDrawer: boolean;
  children: React.ReactNode;
}) => {
  const isSmall = useIsSmall();
  return (
    <MainCard
      style={{
        marginRight: isSmall ? "0px" : openDrawer ? "412px" : "12px",
        marginLeft: isSmall ? "0px" : "12px",
        transition: "margin-right 225ms",
      }}
    >
      {children}
    </MainCard>
  );
};

export default MessageCard;
