import React from "react";

import { Dialog } from "../components/Dialog";

export interface IDialogState {
  open: boolean;
  content?: string;
  okCallback?: () => void;
  closeCallback?: () => void;
  [key: string]: unknown;
}

interface IDialogContext {
  dialogState: IDialogState;
  setDialogState: React.Dispatch<React.SetStateAction<IDialogState>>;
}

const DialogContext = React.createContext<IDialogContext | null>(null);

export const useDialog = () => {
  const dialogContext = React.useContext(DialogContext);
  if (!dialogContext) {
    return {};
  }

  const { setDialogState, dialogState } = dialogContext;
  const showDialog = (props: Omit<IDialogState, "open">) => {
    setDialogState({ open: true, ...props });
  };

  const closeDialog = () => {
    setDialogState((prevState) => ({ ...prevState, open: false }));
  };

  return {
    showDialog,
    closeDialog,
    dialogState,
  };
};

const DialogProvider = ({
  children,
  Component = Dialog,
}: {
  children: React.ReactNode;
  Component?: React.ComponentType<{
    dialogState: IDialogState;
    closeDialog: () => void;
  }>;
}) => {
  const [dialogState, setDialogState] = React.useState<IDialogState>({
    open: false,
  });

  return (
    <DialogContext.Provider
      value={{ dialogState: dialogState, setDialogState: setDialogState }}
    >
      <Component
        dialogState={dialogState}
        closeDialog={() =>
          setDialogState((prevState) => ({ ...prevState, open: false }))
        }
      />
      {children}
    </DialogContext.Provider>
  );
};

export default DialogProvider;
