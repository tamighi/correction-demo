import { useAuth } from "hooks/useAuth";
import { Button, HomeIcon } from "lib";
import { Appbar as LibAppbar, MenuIcon, IconButton, Navbar } from "lib";

import styles from "./Appbar.css";

interface AppbarProps {
  toggleSideBar: () => void;
}

const Appbar = ({ toggleSideBar }: AppbarProps) => {
  const { logout } = useAuth();

  return (
    <LibAppbar className={styles.Appbar}>
      <Navbar>
        <IconButton onClick={toggleSideBar || undefined}>
          <MenuIcon />
        </IconButton>
        <div style={{ flexGrow: 1 }} />
        <Button onClick={logout} color={"text"}>
          Logout
        </Button>
        <a href="/">
          <HomeIcon />
        </a>
      </Navbar>
    </LibAppbar>
  );
};

export default Appbar;
