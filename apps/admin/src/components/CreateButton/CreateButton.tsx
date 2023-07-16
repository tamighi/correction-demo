import { AddIcon, IconButton } from "lib";
import { useNavigate } from "react-router-dom";

const CreateButton = () => {
  const navigate = useNavigate();

  return (
    <IconButton onClick={() => navigate("create")}>
      <AddIcon />
    </IconButton>
  );
};

export default CreateButton;
