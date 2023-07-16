import style from "./FormContent.css";

export interface FormContentProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "vertical" | "horizontal";
}

export const FormContent = (props: FormContentProps) => {
  const { children, direction = "vertical", className = "", ...rest } = props;

  const classNames = `${style.FormContent} ${
    direction === "vertical" ? style.VerticalForm : style.HorizontalForm
  } ${className}`;

  return (
    <div {...rest} className={classNames}>
      {children}
    </div>
  );
};
