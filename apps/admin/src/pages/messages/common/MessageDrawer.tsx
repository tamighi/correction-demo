import { RightDrawer } from "components";
import { ArrowForwardIcon, IconButton } from "lib";
import { useNavigate } from "react-router-dom";

export interface MessageDrawerProps {
  children: React.ReactNode;
  open: boolean;
}

const MessageDrawer = (props: MessageDrawerProps) => {
  const { open, children } = props;

  const navigate = useNavigate();

  return (
    <RightDrawer open={open}>
      <IconButton onClick={() => navigate("")} style={{ marginBottom: "12px" }}>
        <ArrowForwardIcon />
      </IconButton>
      {children}
    </RightDrawer>
  );
};

export default MessageDrawer;
