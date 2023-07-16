import { useStyles } from "lib";

const BaseIcon = ({ children }: { children: React.ReactNode }) => {
  const { color } = useStyles();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="17.306641 17.654297 63 63"
      width="36px"
      height="36px"
      style={{ color }}
    >
      {children}
    </svg>
  );
};

export default BaseIcon;
