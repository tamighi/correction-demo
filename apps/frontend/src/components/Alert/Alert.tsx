import { Card } from "lib";

type Props = {
  children: React.ReactNode;
};

const Alert = (props: Props) => {
  const { children } = props;
  return (
    <Card
      style={{
        padding: "20px 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
      }}
      variant="secondary"
    >
      {children}
    </Card>
  );
};

export default Alert;
