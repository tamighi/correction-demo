import { useIsSmall } from "hooks";
import {
  Button,
  Divider,
  Drawer,
  HelpIcon,
  HomeIcon,
  MessageIcon,
  ReviewIcon,
  SnippetFolderIcon,
} from "lib";
import { useNavigate } from "react-router-dom";

import styles from "./Sidebar.css";

const pages = [
  { name: "Dashboard", to: "/", logo: <HomeIcon />, divider: true },
  {
    name: "Services",
    to: "/service",
    logo: <SnippetFolderIcon />,
    divider: true,
  },
  { name: "Devis", to: "/devis", logo: <MessageIcon /> },
  { name: "Questions", to: "/question", logo: <HelpIcon /> },
  { name: "Avis", to: "/review", logo: <ReviewIcon /> },
];

interface SidebarProps {
  open: boolean;
  toggleSideBar: () => void;
}

const Sidebar = ({ open, toggleSideBar }: SidebarProps) => {
  const isSmall = useIsSmall();

  const navigate = useNavigate();
  const onClose = () => {
    if (open && toggleSideBar) {
      toggleSideBar();
    }
  };

  return (
    <>
      <div
        className={`${styles.Sidebar} ${
          isSmall ? styles.HideSideBar : open ? styles.Open : styles.Close
        }`}
      >
        <ul>
          {pages.map((page, index) => (
            <li key={index}>
              <Button onClick={() => navigate(page.to)}>
                {page.logo}
                {open && page.name}
              </Button>
              {page.divider && <Divider />}
            </li>
          ))}
        </ul>
      </div>
      {isSmall && (
        <Drawer
          open={open || false}
          onClose={onClose}
          className={styles.Drawer}
        >
          <ul>
            {pages.map((page, index) => (
              <li key={index}>
                <Button
                  onClick={() => {
                    navigate(page.to);
                    onClose();
                  }}
                >
                  {page.logo}
                  {page.name}
                </Button>
                {page.divider && <Divider />}
              </li>
            ))}
          </ul>
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
