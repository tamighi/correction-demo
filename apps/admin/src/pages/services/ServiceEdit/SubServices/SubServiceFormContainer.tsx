import { Paper } from "lib";

export const SubServiceFormContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Paper
      style={{
        boxSizing: "border-box",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        position: "relative",
      }}
    >
      {children}
    </Paper>
  );
};
