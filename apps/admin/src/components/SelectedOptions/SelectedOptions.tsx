import { Card } from "lib";

import styles from "./SelectedOptions.css";

const SelectedOptions = <T,>({
  selected,
  children,
}: {
  selected: T[];
  children: React.ReactNode;
}) => {
  return (
    <Card
      className={`${styles.SelectedCard} ${
        selected.length !== 0 ? styles.Open : styles.Close
      }`}
    >
      <p style={{ paddingRight: "48px" }}>{selected.length} item(s) selected</p>
      {children}
    </Card>
  );
};

export default SelectedOptions;
