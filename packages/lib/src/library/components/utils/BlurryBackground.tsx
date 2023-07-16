import React from "react";

import CSSClasses from "./BlurryBlackground.css";

const BlurryBackground = ({
  onClick,
  open,
  delayedClose = open,
  children,
}: {
  onClick?: () => void;
  open: boolean;
  delayedClose?: boolean;
  children: React.ReactNode;
}) => {

  return (
    <div
      className={`${CSSClasses.DrawerContainer} ${
        delayedClose ? "" : CSSClasses.HiddenContainer
      }`}
    >
      <div
        className={`${CSSClasses.Background} ${
          open ? "" : CSSClasses.HiddenBackground
        }`}
        onClick={onClick}
      />
      {children}
    </div>
  );
};

export default BlurryBackground;
