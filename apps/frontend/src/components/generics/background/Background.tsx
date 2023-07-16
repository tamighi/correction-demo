import { useTheme } from "lib";

import winter from "assets/backgrounds/winter.jpg";
import autumn from "assets/backgrounds/autumn.jpg";

import styles from "./Background.css";

const Background = () => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  return (
    <div className={styles.Background}>
      <img src={winter} alt="" style={{ opacity: darkMode ? 1 : 0 }} />
      <img src={autumn} alt="" style={{ opacity: darkMode ? 0 : 1 }} />
    </div>
  );
};

export default Background;
