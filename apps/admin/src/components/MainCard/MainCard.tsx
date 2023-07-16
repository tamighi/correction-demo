import { Card, CardProps } from "lib";
import styles from "./MainCard.css";

export const MainCard = (props: CardProps) => {
  const { children, ...rest } = props;
  return (
    <Card className={styles.MainCard} {...rest}>
      {children}
    </Card>
  );
};
