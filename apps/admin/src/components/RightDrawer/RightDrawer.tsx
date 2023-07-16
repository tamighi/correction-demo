import { useIsSmall } from "hooks";
import { Drawer, DrawerProps } from "lib";
import styles from "./RightDrawer.css";

export const RightDrawer = (props: DrawerProps) => {
  const { children, open, ...rest } = props;
  const isSmall = useIsSmall();

  return (
    <Drawer
      open={open}
      variant="persistent"
      anchor="right"
      className={isSmall ? styles.MobileRightDrawer : styles.RightDrawer}
      {...rest}
    >
      {children}
    </Drawer>
  );
};
