import React from "react";

import CSSClasses from "./InputBase.css";

export interface BaseInputProps {
  flex?: boolean;
  label?: string;
  children: React.ReactNode;
}

// TODO: Flex better styles ? margin input is not working correctly
// TODO: Add bg to label to make it better ? Like a rounded bg with secondary color
const BaseInput = (props: BaseInputProps) => {
  const { flex = false, label, children } = props;

  const containerClassNames =
    `${CSSClasses.InputContainer} ` + `${flex ? CSSClasses.InputFlex : ""}`;

  return (
    <div className={containerClassNames}>
      {children}
      <label className={CSSClasses.Label}>{label}</label>
    </div>
  );
};

export default BaseInput;
