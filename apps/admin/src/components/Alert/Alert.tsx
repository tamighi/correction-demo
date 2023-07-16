import { Button, Card } from "lib";

interface AlertComponentProps {
  message: string;
  onUndo?: () => void;
}

const Alert = (props: AlertComponentProps) => {
  const { message, onUndo } = props;
  return (
    <Card>
      {message}
      {!!onUndo && <Button onClick={onUndo}>Undo</Button>}
    </Card>
  );
};

export default Alert;
