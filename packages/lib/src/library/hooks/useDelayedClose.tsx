import React from "react";

const useDelayedClose = (open: boolean, delay = 225) => {
  const [delayedClose, setDelayedClose] = React.useState(open);

  React.useEffect(() => {
    if (open) {
      setDelayedClose(open);
    }
    const timer = setTimeout(() => {
      if (!open) {
        setDelayedClose(open);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [open, delay]);
  return delayedClose;
};

export default useDelayedClose;
