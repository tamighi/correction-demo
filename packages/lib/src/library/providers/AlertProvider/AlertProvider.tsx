import React from "react";
import AlertComponent from "./AlertComponent";

export interface AlertOptions {
  render?: React.ReactNode;
  open: boolean;
}

type ShowOptions = Omit<AlertOptions, "open">;

export interface AlertContextValues {
  alertOptions: AlertOptions;
  setAlertOptions: React.Dispatch<React.SetStateAction<AlertOptions>>;
}

const AlertContext = React.createContext<AlertContextValues | null>(null);

export const useAlert = () => {
  const dialogContext = React.useContext(AlertContext);
  if (!dialogContext) {
    throw new Error("Alert provider not setup.");
  }

  const { setAlertOptions } = dialogContext;

  const show = (options: ShowOptions = {}) => {
    const { render } = options;

    setAlertOptions({ open: true, render });
  };

  const close = () => {
    setAlertOptions((prevOptions) => ({ ...prevOptions, open: false }));
  };

  return { show, close };
};

const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [alertOptions, setAlertOptions] = React.useState<AlertOptions>({
    open: false,
  });

  const close = () =>
    setAlertOptions((prevOptions) => ({ ...prevOptions, open: false }));

  return (
    <AlertContext.Provider value={{ alertOptions, setAlertOptions }}>
      <AlertComponent options={alertOptions} close={close} />
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
