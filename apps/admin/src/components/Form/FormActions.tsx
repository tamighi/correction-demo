
import { Toolbar, ToolbarProps } from "lib";

export const FormAction = (props: ToolbarProps) => {
  const { children, ...rest } = props;

  return <Toolbar {...rest}>{children}</Toolbar>;
};
