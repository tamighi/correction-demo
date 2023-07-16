import React from "react";

const useIsOverflow = (ref: any, callback: any) => {
  const [isOverflow, setIsOverflow] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow = current.scrollHeight > current.clientHeight;

      setIsOverflow(hasOverflow);

      if (callback) callback(hasOverflow);
    };

    if (current) {
      trigger();
    }
  }, [callback, ref]);

  return isOverflow;
};

export default useIsOverflow;
