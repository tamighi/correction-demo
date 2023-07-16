import { Button } from "lib";
import { useNavigate } from "react-router-dom";

import styles from "./Footer.css";

const NavLinkButton = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();
  return (
    <Button
      className={styles.FooterNavLink}
      onClick={() => navigate(to)}
      variant="text"
      color="text"
    >
      {children}
    </Button>
  );
};

export default NavLinkButton;
