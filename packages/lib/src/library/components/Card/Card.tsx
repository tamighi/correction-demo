import { Colors, useStyles } from "../..";

import CSSClasses from "./Card.css";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof Colors;
}

const Card = (props: CardProps) => {
  const {
    style: customStyle,
    variant: type = "surface",
    children,
    className,
    ...rest
  } = props;

  const classNames = `${CSSClasses.Card} ` + (className || "");

  const styles = useStyles({ background: type, customStyle });

  return (
    <div className={classNames} style={styles} {...rest}>
      {children}
    </div>
  );
};

export default Card;
