import React from "react";

import { AlertOptions } from "./AlertProvider";

import styles from "./AlertComponent.css";

interface AlertComponentProps {
  options: AlertOptions;
  close: () => void;
}

const AlertComponent = (props: AlertComponentProps) => {
  const { options, close } = props;
  const { open, render } = options;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (open) {
        close();
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [open]);

  return (
    <div className={`${styles.Alert} ${open ? styles.Open : styles.Close}`}>
      {render}
    </div>
  );
};

export default AlertComponent;
