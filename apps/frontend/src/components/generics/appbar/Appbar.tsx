import { useLocation, useNavigate } from "react-router-dom";

import { Appbar as LibAppbar, Button, Navbar } from "lib";

import AppbarDrawer from "./AppbarDrawer";
import ThemeToggleIcon from "./ThemeToggleIcon";

import feather from "assets/images/feather.png";

import styles from "./Appbar.css";

const navItems = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Services",
    to: "/services",
  },
  {
    name: "Contact",
    to: "/contact",
  },
  {
    name: "Livre d'or",
    to: "/livredor",
  },
];

const Appbar = () => {
  const location = useLocation();
  const navigation = useNavigate();

  const [_, route] = location.pathname.split("/");

  return (
    <LibAppbar>
      <Navbar>
        <AppbarDrawer navItems={navItems} />
        <ThemeToggleIcon />
        <div className={styles.Logo}>{"Correction services"}</div>
        <ul className={styles.LinkList}>
          {navItems.map((button, id) => (
            <li key={id}>
              <img
                alt=""
                src={feather}
                style={{
                  height: "64px",
                  visibility: button.to === "/" + route ? undefined : "hidden",
                }}
              ></img>
              <Button
                onClick={() => navigation(button.to)}
                style={{ transition: "transform .2s, color 0s" }}
                color="text"
              >
                {button.name}
              </Button>
            </li>
          ))}
        </ul>
      </Navbar>
    </LibAppbar>
  );
};
export default Appbar;
